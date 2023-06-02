import { Inter } from 'next/font/google';
import cn from '@lib/utils';

import '@styles/globals.css';

import Provider from '@components/Provider';
// import Navbar from '@components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AI Coach',
  description: 'Learn Effective Communication Strategies',
};

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn('bg-white text-slate-900 antialiased', inter.className)}
    >
      <body className="min-h-screen bg-slate-50 dark:bg-slate-900 antialiased">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
