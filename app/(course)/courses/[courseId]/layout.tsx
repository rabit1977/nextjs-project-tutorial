import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { getProgress } from '@/actions/get-progress';
import { db } from '@/lib/db';

import { Metadata } from 'next';
import { CourseNavbar } from './_components/course-navbar';
import { CourseSidebar } from './_components/course-sidebar';

export const metadata: Metadata = {
  title: 'Course with chapters',
};

const CourseLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  const { userId } = auth();

  if (!userId) {
    return redirect('/');
  }

  const course = await db.course.findUnique({
    where: {
      id: params.courseId,
    },
    include: {
      chapters: {
        where: {
          isPublished: true,
        },
        include: {
          userProgress: {
            where: {
              userId,
            },
          },
        },
        orderBy: {
          position: 'asc',
        },
      },
    },
  });

  if (!course) {
    return redirect('/');
  }

  const progressCount = await getProgress(userId, course.id);

  return (
    <div className='h-full'>
      <div className='h-[80px] md:pl-60 fixed inset-y-0 w-full'>
        <CourseNavbar course={course} progressCount={progressCount} />
      </div>
      <div className='hidden md:flex h-full w-60 flex-col fixed inset-y-0'>
        <CourseSidebar course={course} progressCount={progressCount} />
      </div>
      <main className='md:pl-60 pt-[80px] h-full '>{children}</main>
    </div>
  );
};

export default CourseLayout;
