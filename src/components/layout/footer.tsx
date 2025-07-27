import { Phone, MapPin } from 'lucide-react';
import Logo from '@/components/logo';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-muted">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start">
             <Logo />
             <p className="mt-4 text-sm text-muted-foreground">
                Your premier hair salon in St. Albert.
             </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-accent" />
                <span className="ml-2 text-sm text-muted-foreground">123 Salon Street, St. Albert, AB T8N 1N1</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 text-accent" />
                <span className="ml-2 text-sm text-muted-foreground">(780) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Loxx The Hair Salon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
