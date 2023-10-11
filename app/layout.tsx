import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ToastProvider } from '@/components/providers/toaster-provider';
import { ConfettiProvider } from '@/components/providers/confetti-provider';
import DashboardLayout from './(dashboard)/layout';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <ClerkProvider>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem={false}
          storageKey='discord-theme'
        >
          <body className={cn(inter.className, '')}>
            <ConfettiProvider />
            <ToastProvider />
            {children}
          </body>
        </ThemeProvider>
      </ClerkProvider>
    </html>
  );
}
