import type { Schema } from '../../../typings';
import type { CollectionCustomizer } from '@forestadmin/agent';

export default (collection: CollectionCustomizer<Schema, 'product'>) =>
  collection
    .addField('orders_count', {
      columnType: 'Number',

      dependencies: ['id'],

      getValues: async (records, context) => {
        const productsIds = records.map(record => record.id);

        const count = await context.dataSource.getCollection('order_item')
          .aggregate(
            { conditionTree: { field: 'product_id', operator: 'In', value: productsIds } },
            { operation: 'Count', groups: [{ field: 'product_id' }] },
          );

        return records.map(record => count.find(c => c.group.product_id === record.id)?.value || 0);

      },
    })
    .emulateFieldSorting('orders_count')
    .emulateFieldFiltering('orders_count');
