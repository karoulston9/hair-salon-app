import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary">
      <div className="flex flex-col text-left leading-none">
        <span className={cn('font-headline text-2xl font-bold tracking-tight')}>
          Loxx
        </span>
        <span className="font-body text-xs uppercase tracking-widest text-muted-foreground">the hair salon</span>
      </div>
    </Link>
  );
}
