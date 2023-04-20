import type { Schema } from '../../../typings';
import type { CollectionCustomizer } from '@forestadmin/agent';

import axios from 'axios';

export default (collection: CollectionCustomizer<Schema, 'customer'>) =>
  collection.addAction('Send Email', {
    scope: 'Single',
    form: [
      {
        label: 'From',
        type: 'String',
        defaultValue: async context => context.caller.email,
        isRequired: true,
        isReadOnly: true,
      },
      {
        label: 'From Name',
        type: 'String',
        defaultValue: async context => `${context.caller.firstName} ${context.caller.lastName}`,
        isRequired: true,
        isReadOnly: true,
      },
      {
        label: 'To',
        type: 'String',
        defaultValue: async context => {
          const { email } = await context.getRecord(['email']);
          return email;
        },
        isRequired: true,
        isReadOnly: true,
      },
      {
        label: 'Subject',
        type: 'String',
        isRequired: true,
      },
      {
        label: 'Message',
        type: 'String',
        description: 'Type your message here',
        isRequired: true,
      },
      {
        label: 'Attachments',
        type: 'FileList',
      },
    ],
    execute: async (context, resultBuilder) => {
      try {
        const { email: toEmail } = await context.getRecord(['email']);

        const url = 'https://hooks.zapier.com/hooks/catch/...../';
        const params = {
          toEmail,
          fromEmail: context.formValues.From,
          fromName: context.formValues['From Name'],
          subject: context.formValues.Subject,
          message: context.formValues.Message,
          attachments: context.formValues.Attachments
        };

        await axios.post(url, params);


        return resultBuilder.success('Email sent successfully!');
      } catch (error) {
        return resultBuilder.error((error as Error).message);
      }
    },
  });
