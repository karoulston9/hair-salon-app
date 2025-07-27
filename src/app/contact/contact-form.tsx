'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { submitContactForm } from '@/app/actions';
import { Label } from '@/components/ui/label';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialState = {
  message: '',
  errors: undefined,
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    // The useFormState handles server-side errors
    // We can show them with form.setError
  });
  
  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: 'Success!',
          description: state.message,
        });
        form.reset();
      } else {
         toast({
          title: 'Error',
          description: state.message,
          variant: 'destructive',
        });
      }
    }
    
    if (state.errors) {
        for (const key in state.errors) {
            if (Object.prototype.hasOwnProperty.call(state.errors, key)) {
                const errorKey = key as keyof ContactFormValues;
                const errorMessage = state.errors[errorKey]?.[0];
                if(errorMessage) {
                    form.setError(errorKey, { type: 'manual', message: errorMessage });
                }
            }
        }
    }
  }, [state, toast, form]);


  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className={form.formState.errors.name ? 'text-destructive' : ''}>Name</Label>
        <Input 
            id="name" 
            name="name" 
            placeholder="Your Name" 
            {...form.register('name')} 
            aria-invalid={form.formState.errors.name ? 'true' : 'false'}
        />
        {form.formState.errors.name && <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className={form.formState.errors.email ? 'text-destructive' : ''}>Email</Label>
        <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="your.email@example.com" 
            {...form.register('email')}
            aria-invalid={form.formState.errors.email ? 'true' : 'false'}
        />
        {form.formState.errors.email && <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className={form.formState.errors.message ? 'text-destructive' : ''}>Message</Label>
        <Textarea 
            id="message" 
            name="message" 
            placeholder="Tell us how we can help..." 
            rows={5} 
            {...form.register('message')}
            aria-invalid={form.formState.errors.message ? 'true' : 'false'}
        />
        {form.formState.errors.message && <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
