import type { Schema } from '../../../typings';
import type { CollectionCustomizer } from '@forestadmin/agent';

export default (collection: CollectionCustomizer<Schema, 'product'>) =>
  collection
    .addField('total_revenue', {
      columnType: 'Number',

      dependencies: ['id'],

      getValues: async (records, context) => {
        const productsIds = records.map(record => record.id);

        const count = await context.dataSource.getCollection('order_item')
          .aggregate(
            { conditionTree: { field: 'product_id', operator: 'In', value: productsIds } },
            { operation: 'Sum', field: 'total', groups: [{ field: 'product_id' }] },
          );

        return records.map(record => count.find(c => c.group.product_id === record.id)?.value || 0);

      },
    })
    .emulateFieldSorting('total_revenue')
    .emulateFieldFiltering('total_revenue');
