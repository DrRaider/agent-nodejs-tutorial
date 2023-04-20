import type { Schema } from '../../../typings';
import type { CollectionCustomizer } from '@forestadmin/agent';

export default (collection: CollectionCustomizer<Schema, 'customer'>) =>
  collection
    .addField('total_revenue', {
      columnType: 'Number',

      dependencies: ['id'],

      getValues: async (records, context) => {
        const customersIds = records.map(record => record.id);

        const count = await context.dataSource.getCollection('order_item')
          .aggregate(
            { conditionTree: { field: 'order:customer_id', operator: 'In', value: customersIds } },
            { operation: 'Sum', field: 'total', groups: [{ field: 'order:customer_id' }] },
          );

        return records.map(record => count.find(c => c.group['order:customer_id'] === record.id)?.value || 0);
      },
    })
    .emulateFieldSorting('total_revenue')
    .emulateFieldFiltering('total_revenue')
