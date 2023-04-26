import type { Schema } from '../../typings';
import type { Agent } from '@forestadmin/agent';

import fullName from './fields/full-name';
import totalOrders from './fields/total-orders';
import lastOrderId from './fields/last-order-id';
import lastOrder from './relationships/last-order';
import totalRevenue from './fields/total-revenue';
import sendEmail from './actions/send-email';
import gdprAnonymize from './actions/gdpr-anonymize';


const COLLECTION_NAME = 'customer';

const addCustomerCustomizations = (agent: Agent<Schema>) => {
  agent
    .customizeCollection(COLLECTION_NAME, fullName)
    .customizeCollection(COLLECTION_NAME, totalOrders)
    .customizeCollection(COLLECTION_NAME, lastOrderId)
    .customizeCollection(COLLECTION_NAME, totalRevenue)
    .customizeCollection(COLLECTION_NAME, lastOrder)
    .customizeCollection(COLLECTION_NAME, gdprAnonymize)
    .customizeCollection(COLLECTION_NAME, sendEmail);
};

export default addCustomerCustomizations;
