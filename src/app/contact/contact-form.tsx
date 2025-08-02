'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <Button type="submit" disabled={loading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {loading ? 'Sending...' : 'Send Message'}
    </Button>
  );
}

export default function ContactForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setLoading(true);
    // Simulate network delay and success
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLoading(false);
    toast({
      title: 'Success!',
      description: 'Thank you for your message! We will get back to you shortly.',
    });
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className={form.formState.errors.name ? 'text-destructive' : ''}>Name</Label>
        <Input 
            id="name" 
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
            placeholder="Tell us how we can help..." 
            rows={5} 
            {...form.register('message')}
            aria-invalid={form.formState.errors.message ? 'true' : 'false'}
        />
        {form.formState.errors.message && <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>}
      </div>
      <SubmitButton loading={loading} />
    </form>
  );
}
