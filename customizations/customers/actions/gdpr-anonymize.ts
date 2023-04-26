import type { Schema } from '../../../typings';
import type { CollectionCustomizer } from '@forestadmin/agent';

export default (collection: CollectionCustomizer<Schema, 'customer'>) =>
  collection.addAction('GDPR Anonymize', {
    scope: 'Bulk',
    execute: async (context, resultBuilder) => {
      try {
        const customerIds = await context.getRecordIds();

        // Anonymize addresses related to the customers
        await context.dataSource.getCollection('address').update({
          conditionTree: { field: 'customer_id', operator: 'In', value: customerIds }
        }, {
          first_name: 'gdpr_anonymized',
          last_name: 'gdpr_anonymized',
          company: 'gdpr_anonymized',
          street: 'gdpr_anonymized',
          postcode: 'gdpr_anonymized',
          phone_number: 'gdpr_anonymized',
        });

        // Anonymize customers
        await context.collection.update({
          conditionTree: { field: 'id', operator: 'In', value: customerIds }
        }, {
          first_name: 'gdpr_anonymized',
          last_name: 'gdpr_anonymized',
          email: 'gdpr_anonymized',
          company: 'gdpr_anonymized',
          birthday: 'gdpr_anonymized',
        });

        return resultBuilder.success('Customers successfully anonymized!');
      } catch (error) {
        return resultBuilder.error((error as Error).message);
      }
    },
  });
