import type { Schema } from '../../typings';
import type { Agent } from '@forestadmin/agent';
import sendInvoice from './actions/send-invoice';



const COLLECTION_NAME = 'order';

const addProjectCustomizations = (agent: Agent<Schema>) => {
  agent
    .customizeCollection(COLLECTION_NAME, sendInvoice)
};

export default addProjectCustomizations;
