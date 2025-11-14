'use server';

import { type CreateEmailResponseSuccess, Resend } from 'resend';
import { ContactDto } from '../contracts/contact.dto';
import Email from '../../../../emails/my-email';

const resend = new Resend(process.env.RESEND_API_KEY);

type OperationResult<T> =
  | {
      success: true;
      data?: T;
    }
  | {
      success: false;
      error?: string;
    };

export const sendContactEmail = async (
  data: ContactDto,
): Promise<OperationResult<CreateEmailResponseSuccess | null>> => {
  const response = await resend.emails.send({
    // from: data.email,
    from: 'Powiadomienia <noreply@updates.webamigos.pl>',
    // to: ['patryk.omiotek@technischools.com'],
    to: [data.email],
    subject: data.title,
    html: `<p>${data.content}</p>`,
    react: Email(),
  });

  if (response.error) {
    console.error(response.error);
    return {
      success: false,
    };
  }

  return {
    success: true,
    data: response.data,
  };
};
