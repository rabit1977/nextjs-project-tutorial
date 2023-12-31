'use client';

import { useRouter } from 'next/navigation';
import { Logo } from './logo';
import { SidebarRoutes } from './sidebar-routes';

export const Sidebar = () => {
  const router = useRouter();

  function onClick() {
    router.push('/');
  }
  return (
    <div className='h-full border-r flex flex-col overflow-y-auto shadow-sm dark:bg-slate-900'>
      <button onClick={onClick} className='p-6 h-[80px]'>
        <Logo />
      </button>
      <div className='flex flex-col'>
        <SidebarRoutes />
      </div>
    </div>
  );
};
