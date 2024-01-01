import { Metadata } from 'next';
import { Navbar } from './_components/navbar';
import { Sidebar } from './_components/sidebar';

export const metadata: Metadata = {
  title: 'Dashboard',
};

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full '>
      <div className='h-[80px] md:pl-56 fixed inset-y-0 w-full bg-white dark:bg-[#0F1729] z-[99999]'>
        <Navbar />
      </div>
      <div className='hidden md:flex h-full w-56 fixed flex-col inset-y-0 bg-white dark:bg-[#0F1729] z-[99999]'>
        <Sidebar />
      </div>
      <main className='md:pl-56 pt-[80px] h-full'>{children}</main>
    </div>
  );
};

export default DashboardLayout;
