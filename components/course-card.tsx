import Image from 'next/image';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

import { IconBadge } from '@/components/icon-badge';
import { formatPrice } from '@/lib/format';
import { CourseProgress } from '@/components/course-progress';
import { formatDateToLocal } from '@/lib/utils';

interface CourseCardProps {
  id: string;
  title: string;
  imageUrl: string;
  chaptersLength: number;
  price: number;
  progress: number | null;
  category: string;
  createdAt: Date;
}

export const CourseCard = ({
  id,
  title,
  imageUrl,
  chaptersLength,
  price,
  progress,
  category,
  createdAt,
}: CourseCardProps) => {
  return (
    <Link href={`/courses/${id}`}>
      <div className='group hover:ring-4 hover:ring-slate-500 transition overflow-hidden border rounded-lg p-4 h-full lg:max-w-lg md:m-auto space-y-2'>
        <div className='relative aspect-video rounded-md overflow-hidden'>
          <Image fill className='object-cover' alt={title} src={imageUrl} />
        </div>
        <div className='flex flex-col pt-3'>
          <div className='text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2'>
            {title}
          </div>
          <p className='text-xs text-muted-foreground'>{category}</p>
          <div className='my-3 flex items-center gap-x-2 text-sm md:text-xs'>
            <div className='w-full flex items-center gap-x-2 text-slate-500'>
              <IconBadge size='sm' icon={BookOpen} />
              <span>
                {chaptersLength} {chaptersLength === 1 ? 'Chapter' : 'Chapters'}
              </span>
              <span className='ml-auto'>
                {formatDateToLocal(createdAt).dateOnly}
              </span>
            </div>
          </div>
          {progress !== null ? (
            <CourseProgress
              variant={progress === 100 ? 'success' : 'default'}
              size='sm'
              value={progress}
            />
          ) : (
            <p className='text-md md:text-sm font-medium text-slate-700 dark:text-slate-300 underline underline-offset-4'>
              {formatPrice(price)}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};
