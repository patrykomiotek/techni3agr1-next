'use server';

import { type CreateEmailResponseSuccess, Resend } from 'resend';
import { ContactDto } from '../contracts/contact.dto';

const resend = new Resend('re_xxxxxxxxx');

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
    from: data.email,
    to: ['patryk.omiotek@technischools.com'],
    subject: data.title,
    html: `<p>${data.content}</p>`,
  });

  if (response.error) {
    return {
      success: false,
    };
  }

  return {
    success: true,
    data: response.data,
  };
};
