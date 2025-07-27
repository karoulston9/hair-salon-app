'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors and try again.',
      success: false,
    };
  }

  // Here you would typically send an email or save to a database.
  // For this example, we'll just simulate a success response.
  console.log('Form data received:', validatedFields.data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    message: 'Thank you for your message! We will get back to you shortly.',
    success: true,
  };
}
