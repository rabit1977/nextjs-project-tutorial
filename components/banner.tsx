import { AlertTriangle, CheckCircleIcon } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const bannerVariants = cva(
  'border text-center p-3 text-sm flex items-center w-full',
  {
    variants: {
      variant: {
        warning: 'bg-red-800/80 border-slate-800 text-primary',
        success: 'bg-emerald-700 border-emerald-500 text-white',
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
      <Icon className='h-6 w-6 mr-2' />
      {label}
    </div>
  );
};
