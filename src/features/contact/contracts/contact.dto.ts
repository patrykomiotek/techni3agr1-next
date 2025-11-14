import { z } from 'zod';

export const contactSchema = z.object({
  title: z.string().min(3, { error: 'Title is required' }),
  email: z.email({ error: 'Email is required' }),
  content: z
    .string()
    .min(3, { error: 'Content is required' })
    .max(150, { error: 'Max 150 characters' }),
});

export type ContactDto = z.infer<typeof contactSchema>;
