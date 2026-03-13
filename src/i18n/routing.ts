import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ja', 'en'],
  defaultLocale: 'ja',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/lodge7': '/lodge7',
    '/about': '/about',
    '/location': '/location',
    '/contact': '/contact',
    '/elements/[slug]': '/elements/[slug]',
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
