import { AlertTriangle, CheckCircleIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const bannerVariants = cva(
  'border text-center p-3 top-0 left-0 right-0 text-sm flex items-center w-full absolute z-50',
  {
    variants: {
      variant: {
        warning: 'bg-red-800/80 border-slate-800 text-primary',
        success: 'bg-emerald-700 border-emerald-800 text-secondary',
      },
    },
    defaultVariants: {
      variant: 'warning',
    },
  }
);

interface BannerProps extends VariantProps<typeof bannerVariants> {
  label: string;
}

const iconMap = {
  warning: AlertTriangle,
  success: CheckCircleIcon,
};

export const Banner = ({ label, variant }: BannerProps) => {
  const Icon = iconMap[variant || 'warning'];

  return (
    <div className={cn(bannerVariants({ variant }))}>
      <Icon className='h-4 w-4 mr-2' />
      {label}
    </div>
  );
};
