import type { Schema } from '../../../typings';
import type { CollectionCustomizer } from '@forestadmin/agent';

export default (collection: CollectionCustomizer<Schema, 'customer'>) =>
  collection.addManyToOneRelation('last_order', 'order', {
    foreignKey: 'last_order_id',
  });
