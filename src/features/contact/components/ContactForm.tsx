'use client';

import { Input } from '@/shared/components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactDto, contactSchema } from '../contracts/contact.dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendContactEmail } from '../services/send-contact-email';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactDto>({
    resolver: zodResolver(contactSchema),
  });

  const handleContactSubmit: SubmitHandler<ContactDto> = async (data) => {
    console.log({ data });
    const result = await sendContactEmail(data);
    console.log({ result });
    if (result.success) {
      // success toast
    } else {
      // error toast
    }
  };

  return (
    <form onSubmit={handleSubmit(handleContactSubmit)}>
      <Input label="Subject" {...register('title')} error={errors.title} />
      <Input label="E-mail" {...register('email')} error={errors.email} />
      <Input label="Content" {...register('content')} error={errors.content} />
      <button type="submit">Submit</button>
    </form>
  );
};
