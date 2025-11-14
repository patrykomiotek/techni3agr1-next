'use client';

import { Input } from '@/shared/components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactDto, contactSchema } from '../contracts/contact.dto';
import { zodResolver } from '@hookform/resolvers/zod';

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
    // await sendContactEmail(data)
  };

  return (
    <form onSubmit={handleSubmit(handleContactSubmit)}>
      <Input {...register('title')} error={errors.title} />
      <Input {...register('email')} error={errors.email} />
      <Input {...register('content')} error={errors.content} />
      <button type="submit">Submit</button>
    </form>
  );
};
