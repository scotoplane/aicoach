import siteConfig from '@/config/site';
import cn from '@/lib/utils';
import { Icons } from '@/components/icons';

export default function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by
            {' '}
            <a
              href={siteConfig.authors[0].github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {`${siteConfig.authors[0].name} `}
            </a>
            and
            {' '}
            <a
              href={siteConfig.authors[1].github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              {siteConfig.authors[1].name}
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
