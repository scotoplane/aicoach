// import { User } from 'prisma/client';
// import type { Icon } from 'lucide-react';

// import { Icons } from '@components/icons';

export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};

export type MainNavItem = NavItem;

export type Author = {
  name: string;
  github: string;
};

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  github: string;
  authors: Author[];
};

export type HomeConfig = {
  mainNav: MainNavItem[];
};
