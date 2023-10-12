import { Chapter, Course, UserProgress } from '@prisma/client';

import { NavbarRoutes } from '@/components/navbar-routes';

import { CourseMobileSidebar } from './course-mobile-sidebar';

interface CourseNavbarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[];
  };
  progressCount: number;
}

export const CourseNavbar = ({ course, progressCount }: CourseNavbarProps) => {
  return (
    <div className='p-4 border-b h-full flex items-center relative bg-white shadow-sm dark:bg-[#0F1729]'>
      <NavbarRoutes />
      <CourseMobileSidebar course={course} progressCount={progressCount} />
    </div>
  );
};
