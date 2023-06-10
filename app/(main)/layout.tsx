// import Link from 'next/link';

import SiteFooter from '@/components/site-footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <SiteFooter />
    </div>
  );
}
