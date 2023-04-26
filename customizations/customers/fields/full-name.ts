import type { Schema } from '../../../typings';
import type { CollectionCustomizer } from '@forestadmin/agent';

export default (collection: CollectionCustomizer<Schema, 'customer'>) =>
  collection
    .addField('full_name', {
      columnType: 'String',

      dependencies: ['id', 'first_name', 'last_name'],

      getValues: (records, context) => records.map(record => `${record.first_name} ${record.last_name}`),
    });
