import type { Schema } from '../../../typings';
import type { CollectionCustomizer } from '@forestadmin/agent';

export default (collection: CollectionCustomizer<Schema, 'customer'>) =>
  collection
    .addField('total_orders', {
      columnType: 'Number',

      dependencies: ['id'],

      getValues: async (records, context) => {
        const customersIds = records.map(record => record.id);

        const count = await context.dataSource.getCollection('order')
          .aggregate(
            { conditionTree: { field: 'customer_id', operator: 'In', value: customersIds } },
            { operation: 'Count', groups: [{ field: 'customer_id' }] },
          );

        return records.map(record => count.find(c => c.group.customer_id === record.id)?.value || 0);
      },
    })
    .emulateFieldSorting('total_orders')
    .emulateFieldFiltering('total_orders')
