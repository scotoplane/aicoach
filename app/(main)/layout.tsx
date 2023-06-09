import SiteFooter from '@/components/site-footer';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <SiteFooter />
    </div>
  );
}
