import type { Schema } from '../../../typings';
import type { CollectionCustomizer } from '@forestadmin/agent';

import MicroInvoice from 'microinvoice';

export default (collection: CollectionCustomizer<Schema, 'order'>) =>
  collection.addAction('Download invoice', {
    scope: 'Single',
    generateFile: true,
    execute: async (context, resultBuilder) => {
      try {
        const order = await context.getRecord([
          'id',
          'created_at',
          'customer:id',
          'customer:full_name',
          'customer:company',
          'customer:email',
        ]);

        const [payment] = await context.dataSource
          .getCollection('payment')
          .list({ conditionTree: { field: 'order_id', operator: 'In', value: [order.id] } }, [
            'id',
            'state',
          ]);

        const [address] = await context.dataSource.getCollection('address').list(
          {
            conditionTree: { field: 'customer_id', operator: 'In', value: [order.customer.id] },
          },
          ['phone_number', 'street', 'postcode', 'city', 'country_code'],
        );

        const items = await context.dataSource
          .getCollection('order_item')
          .list({ conditionTree: { field: 'order_id', operator: 'In', value: [order.id] } }, [
            'quantity',
            'product:name',
            'product:price',
          ]);

        const invoice = new MicroInvoice({
          style: {
            header: {
              image: {
                path: `${__dirname}/logo.png`,
                width: 70,
                height: 70,
              },
            },
          },
          data: {
            invoice: {
              name: 'Invoice',
              header: [
                {
                  label: 'Invoice Number',
                  value: payment.id,
                },
                {
                  label: 'Status',
                  value: payment.state,
                },
                {
                  label: 'Date',
                  value: order.created_at,
                },
              ],
              currency: 'EUR',
              customer: [
                {
                  label: 'Bill To',
                  value: [
                    order.customer.full_name,
                    order.customer.company,
                    order.customer.email,
                    address.phone_number,
                    address.street,
                    address.city,
                    address.postcode,
                    address.country_code,
                  ],
                },
              ],
              seller: [
                {
                  label: 'Bill From',
                  value: [
                    'Claus Inc.',
                    '123 ELF ROAD',
                    'NORTH POLE',
                    '88888',
                    '+16053134000',
                    'santa@officialsantaemail.com',
                  ],
                },
              ],
              details: {
                header: [
                  {
                    value: 'Description',
                  },
                  {
                    value: 'Quantity',
                  },
                  {
                    value: 'Subtotal',
                  },
                ],
                parts: [
                  ...items.map(item => [
                    {
                      value: item.product.name,
                    },
                    {
                      value: item.quantity,
                    },
                    {
                      value: item.product.price,
                      price: true,
                    },
                  ]),
                ],
                total: [
                  {
                    label: 'Total (EUR)',
                    value: items.reduce((acc, item) => acc + item.product.price * item.quantity, 0),
                    price: true,
                  },
                ],
              },
            },
          },
        });

        // Return invoice as PDF
        return resultBuilder.file(await invoice.generate(), `${order.id}.pdf`, 'application/pdf');
      } catch (error) {
        return resultBuilder.error((error as Error).message);
      }
    },
  });
