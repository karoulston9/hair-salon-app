import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Mail } from 'lucide-react';
import ContactForm from './contact/contact-form';

export default function Home() {
  const services = [
    {
      name: 'Ladies Cut & Style',
      description: 'A customized haircut designed by your stylist to fit your individual style and preferences.',
      image: 'https://placehold.co/600x400.png',
      hint: 'woman haircut',
    },
    {
      name: 'Men\'s Cut & Style',
      description: 'Get a fresh, modern look with our precision men\'s haircut and styling service.',
      image: 'https://placehold.co/600x400.png',
      hint: 'man haircut',
    },
    {
      name: 'Expert Colouring',
      description: 'From root touch-ups to balayage, our color experts will create the perfect shade for you.',
      image: 'https://placehold.co/600x400.png',
      hint: 'hair coloring',
    },
  ];

  return (
    <div className="flex flex-col">
      <section
        id="hero"
        className="relative h-[60vh] min-h-[400px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }}
        data-ai-hint="salon interior"
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Loxx The Hair Salon
          </h1>
          <p className="mt-4 max-w-2xl font-body text-lg md:text-xl">
            Experience the art of hair in the heart of St. Albert.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/pricing">View Our Services</Link>
          </Button>
        </div>
      </section>

      <section id="about" className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Your Style, Our Passion
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Welcome to Loxx, where we believe that a great hairstyle can transform your day and boost your confidence. Located in beautiful St. Albert, our salon is a haven of relaxation and creativity. Our talented stylists are dedicated to providing you with a personalized experience, using top-of-the-line products and the latest techniques to bring your hair goals to life.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              Whether you're looking for a fresh cut, a vibrant new color, or a special occasion style, we're here to make you look and feel your absolute best.
            </p>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-xl md:h-96">
            <Image
              src="https://placehold.co/600x800.png"
              alt="Interior of Loxx Salon"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
              data-ai-hint="modern salon"
            />
          </div>
        </div>
      </section>
      
      <Separator />

      <section id="services" className="bg-muted py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Our Signature Services
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Discover a new you with our range of professional hair services tailored to your needs.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.name} className="overflow-hidden border-2 border-border/80 bg-background shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <CardHeader className="p-0">
                  <div className="relative h-56 w-full">
                    <Image
                      src={service.image}
                      alt={service.name}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={service.hint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline text-2xl">{service.name}</CardTitle>
                  <p className="mt-2 text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link href="/pricing">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />
      
      <section id="contact" className="container mx-auto px-4 py-16 sm:py-24">
         <div className="text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Get in Touch
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Ready for a transformation? Contact us to book your appointment.
            </p>
          </div>
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h3 className="font-headline text-xl font-semibold">Contact Information</h3>
              <div className="mt-4 space-y-4 text-lg">
                <p className="flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-accent" />
                  <span>123 Salon Street, St. Albert, AB T8N 1N1</span>
                </p>
                <p className="flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-accent" />
                  <span>(780) 123-4567</span>
                </p>
                <p className="flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-accent" />
                  <span>hello@loxxsalon.com</span>
                </p>
              </div>
            </div>
             <div>
              <h3 className="font-headline text-xl font-semibold">Hours</h3>
              <div className="mt-4 space-y-2 text-lg text-muted-foreground">
                <p>Tuesday - Friday: 9am - 8pm</p>
                <p>Saturday: 9am - 5pm</p>
                <p>Sunday & Monday: Closed</p>
              </div>
            </div>
          </div>
          <Card className="bg-muted p-6 sm:p-8">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
