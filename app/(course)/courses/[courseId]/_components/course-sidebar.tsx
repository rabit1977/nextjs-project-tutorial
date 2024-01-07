import { auth } from '@clerk/nextjs';
import { Chapter, Course, UserProgress } from '@prisma/client';
import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { CourseProgress } from '@/components/course-progress';

import { CourseSidebarItem } from './course-sidebar-item';
import Link from 'next/link';

interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const CourseSidebar = async ({
  course,
  progressCount,
}: CourseSidebarProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const purchase = await db.purchase.findUnique({
    where: {
      userId_courseId: {
        userId,
        courseId: course.id,
      },
    },
  });

  return (
    <div className='h-full border-r flex flex-col overflow-y-auto shadow-sm w-60'>
      <div className='flex flex-col'>
        <div className='h-[80px] flex justify-start items-center'>
          <Link
            href='/search'
            className='font-semibold text-xl pl-4 hover:opacity-90 '
          >
            {course.title.toUpperCase()}
          </Link>
        </div>
        <div className='border-t p-6 pt-0'>
          {purchase && (
            <div className='mt-10'>
              <CourseProgress variant='success' value={progressCount} />
            </div>
          )}
        </div>
      </div>
      <div className='flex flex-col w-full'>
        {course.chapters.map((chapter) => (
          <CourseSidebarItem
            key={chapter.id}
            id={chapter.id}
            label={chapter.title}
            isCompleted={!!chapter.userProgress?.[0]?.isCompleted}
            courseId={course.id}
            isLocked={!chapter.isFree && !purchase}
          />
        ))}
      </div>
    </div>
  );
};
