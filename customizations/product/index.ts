import type { Schema } from '../../typings';
import type { Agent } from '@forestadmin/agent';

import ordersCount from './fields/orders-count';
import totalRevenue from './fields/total-revenue';

const COLLECTION_NAME = 'product';

const addOrderCustomizations = (agent: Agent<Schema>) => {
  agent
    .customizeCollection(COLLECTION_NAME, ordersCount)
    .customizeCollection(COLLECTION_NAME, totalRevenue)
};

export default addOrderCustomizations;
