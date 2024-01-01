'use client';

import { CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import { cn } from '@/lib/utils';

interface CourseSidebarItemProps {
  label: string;
  id: string;
  isCompleted: boolean;
  courseId: string;
  isLocked: boolean;
}

export const CourseSidebarItem = ({
  label,
  id,
  isCompleted,
  courseId,
  isLocked,
}: CourseSidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const Icon = isLocked ? Lock : isCompleted ? CheckCircle : PlayCircle;
  const isActive = pathname?.includes(id);

  const onClick = () => {
    router.push(`/courses/${courseId}/chapters/${id}`);
  };

  return (
    <button
      onClick={onClick}
      type='button'
      className={cn(
        'flex items-center gap-x-2 text-slate-500 text-sm font-[500] transition-all hover:text-slate-400 hover:bg-slate-800/80 pl-3',
        isActive && 'text-slate-200 hover:bg-slate-800/80 hover:text-slate-50',
        isCompleted && 'text-emerald-500 hover:text-emerald-400 ',
        isCompleted && isActive && 'bg-slate-200/20'
      )}
    >
      <div className='flex items-center gap-x-2 py-4'>
        <Icon
          size={22}
          className={cn(
            'text-slate-500 hover:text-slate-50',
            isActive && 'text-slate-200',
            isCompleted && 'text-emerald-600'
          )}
        />
        <h3 className='line-clamp-1'>{label}</h3>
      </div>
      <div
        className={cn(
          'ml-auto opacity-0 border-2 border-slate-600 h-full transition-all ',
          isActive && 'opacity-100',
          isCompleted && 'border-emerald-600'
        )}
      />
    </button>
  );
};
