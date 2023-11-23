import { Category, Course } from '@prisma/client';

import { CourseCard } from '@/components/course-card';

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

interface CoursesListProps {
  items: CourseWithProgressWithCategory[];
}

export const CoursesList = ({ items }: CoursesListProps) => {
  return (
    <div>
      <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-6'>
        {items.map((item) => (
          <CourseCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl!}
            chaptersLength={item.chapters.length}
            price={item.price!}
            progress={item.progress}
            category={item?.category?.name!}
            createdAt={item.createdAt}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className='text-center text-sm text-muted-foreground mt-10'>
          No courses found
        </div>
      )}
    </div>
  );
};
