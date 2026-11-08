import { Phone } from 'lucide-react';
import { business } from '@/data/business';

type CallButtonVariant = 'primary' | 'light' | 'outline';

const variantClasses: Record<CallButtonVariant, string> = {
  primary: 'bg-cyan-300 text-navy-950 shadow-lg shadow-navy-950/40 hover:bg-cyan-200',
  light: 'bg-white text-navy-900 shadow-lg shadow-navy-950/30 hover:bg-navy-50',
  outline: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
};

interface CallButtonProps {
  label?: string;
  variant?: CallButtonVariant;
  className?: string;
}

export default function CallButton({ label, variant = 'primary', className = '' }: CallButtonProps) {
  return (
    <a
      href={business.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-extrabold transition duration-300 hover:-translate-y-0.5 ${variantClasses[variant]} ${className}`}
    >
      <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span>{label ?? `Call ${business.phoneDisplay}`}</span>
    </a>
  );
}
