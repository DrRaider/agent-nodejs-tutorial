import type { Schema } from '../../../typings';
import type { CollectionCustomizer } from '@forestadmin/agent';

export default (collection: CollectionCustomizer<Schema, 'customer'>) =>
  collection
    .addField('last_order_id', {
      columnType: 'Number',

      dependencies: ['id'],

      getValues: async (records, context) => {
        const customersIds = records.map(record => record.id);

        const rows = await context.dataSource.getCollection('order')
          .aggregate(
            { conditionTree: { field: 'customer_id', operator: 'In', value: customersIds } },
            { operation: 'Max', field: 'id', groups: [{ field: 'customer_id' }] },
          );

        return records.map(record => {
          return rows.find(row => row.group.customer_id === record.id)?.value ?? null;
        });
      },
    })
    .replaceFieldOperator('last_order_id', 'In', async (lastOrderIds, context) => {
      const orders = await context.dataSource.getCollection('order')
        .list(
          { conditionTree: { field: 'id', operator: 'In', value: lastOrderIds } },
          ['customer_id'],
        );

      return { field: 'id', operator: 'In', value: orders.map(order => order.customer_id) };
    });
