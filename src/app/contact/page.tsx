import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import ContactForm from './contact-form';

export default function ContactPage() {
  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We'd love to hear from you! Reach out to schedule an appointment or ask any questions.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <Card className="bg-muted/50 p-6">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Visit Our Salon</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="flex items-start">
                    <MapPin className="mr-4 mt-1 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-lg">123 Salon Street, St. Albert, AB T8N 1N1</span>
                  </p>
                  <p className="flex items-center">
                    <Phone className="mr-4 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-lg">(780) 123-4567</span>
                  </p>
                  <p className="flex items-center">
                    <Mail className="mr-4 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-lg">hello@loxxsalon.com</span>
                  </p>
                </div>
                <div className="mt-6 aspect-video w-full overflow-hidden rounded-md bg-muted">
                    <div 
                        className="h-full w-full bg-cover bg-center"
                        style={{backgroundImage: "url('https://placehold.co/600x400.png')"}}
                        data-ai-hint="city map"
                    >
                        {/* Placeholder for an interactive map */}
                    </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50 p-6">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Hours of Operation</CardTitle>
              </CardHeader>
              <CardContent>
                 <div className="space-y-2 text-lg">
                    <p className="flex items-center"><Clock className="mr-4 h-5 w-5 shrink-0 text-accent" /> <span>Tuesday - Friday: 9am - 8pm</span></p>
                    <p className="flex items-center"><Clock className="mr-4 h-5 w-5 shrink-0 text-accent" /> <span>Saturday: 9am - 5pm</span></p>
                    <p className="flex items-center"><Clock className="mr-4 h-5 w-5 shrink-0 text-accent" /> <span>Sunday & Monday: Closed</span></p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
