import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ScissorIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <line x1="20" x2="8.12" y1="4" y2="15.88" />
    <line x1="14.47" x2="20" y1="14.48" y2="20" />
    <line x1="8.12" x2="12" y1="8.12" y2="12" />
  </svg>
);

const PaintBrushIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    <path d="m15 5 4 4" />
  </svg>
);

const SparkleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.93 2.55a2 2 0 0 0-1.86 0L6.6 4.1a2 2 0 0 1-2.12.35l-1.9-.8a2 2 0 0 0-2.22 2.22l.8 1.9a2 2 0 0 1-.35 2.12L-1.4 11.4a2 2 0 0 0 0 1.2l2.55 1.47a2 2 0 0 1 .35 2.12l-.8 1.9a2 2 0 0 0 2.22 2.22l1.9-.8a2 2 0 0 1 2.12.35l1.47 2.55a2 2 0 0 0 1.86 0l1.47-2.55a2 2 0 0 1 2.12-.35l1.9.8a2 2 0 0 0 2.22-2.22l-.8-1.9a2 2 0 0 1 .35-2.12l2.55-1.47a2 2 0 0 0 0-1.2l-2.55-1.47a2 2 0 0 1-.35-2.12l.8-1.9a2 2 0 0 0-2.22-2.22l-1.9.8a2 2 0 0 1-2.12-.35L9.93 2.55Z" />
    </svg>
);

type Service = {
  name: string;
  price: string;
  description?: string;
};

const serviceCategories: { title: string; icon: React.ElementType; services: Service[] }[] = [
  {
    title: 'Haircuts & Styling',
    icon: ScissorIcon,
    services: [
      { name: 'Ladies Wash, Cut & Style', price: '$62.00' },
      { name: 'Men’s Wash, Cut & Style', price: '$38.51' },
      { name: 'Youth (14 – 18) Girls', price: '$40.00' },
      { name: 'Youth (14 – 18) Boys', price: '$20.00' },
      { name: 'Children (10 – 14)', price: '$30.00' },
      { name: 'Children (0 – 10)', price: '$20.00' },
      { name: 'Bang Trim or Thinning', price: '$10.00' },
      { name: 'Shampoo & Set, Style', price: '$38.00' },
    ],
  },
  {
    title: 'Color Services',
    icon: PaintBrushIcon,
    services: [
      { name: 'Short Root Tap', price: '$85.00' },
      { name: 'Medium Root Tap', price: '$95.00' },
      { name: 'Colour Correction', price: 'Starts at $200.00', description: 'Consultation required.' },
    ],
  },
  {
    title: 'Treatments & Texture',
    icon: SparkleIcon,
    services: [
      { name: 'Hair Mask Treatment', price: '$25.00' },
      { name: 'Permanent Wave or Texture Service', price: 'Starts at $125.00' },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="bg-background animate-fade-in">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight md:text-5xl">
            Our Services & Pricing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Invest in your hair, it's the crown you never take off. We offer a wide range of services to suit your needs.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {serviceCategories.map((category) => (
            <Card key={category.title} className="flex flex-col border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-4 font-headline text-3xl">
                  <category.icon className="h-8 w-8 text-accent" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {category.services.map((service, index) => (
                    <li key={service.name}>
                      <div className="flex items-baseline justify-between">
                        <div className="flex-1">
                            <h3 className="font-semibold">{service.name}</h3>
                             {service.description && (
                                <p className="text-sm text-muted-foreground">{service.description}</p>
                            )}
                        </div>
                        <p className="ml-4 text-right font-medium text-primary">{service.price}</p>
                      </div>
                      {index < category.services.length - 1 && <Separator className="mt-4" />}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>* All prices are subject to change without notice. Prices may vary depending on hair length, thickness, and complexity of the service.</p>
          <p>* Please consult with your stylist for an accurate quote.</p>
        </div>
      </div>
    </div>
  );
}
