'use client';

import * as React from 'react';
import NextLink from 'next/link';

import Link, { type LinkProps } from '@mui/material/Link';

type AppLinkProps = Omit<LinkProps, 'component' | 'href'> & {
  href: string;
};

/**
 * MUI `Link` wired to `next/link`, kept in its own Client Component so Server
 * Components can render internal links without passing the `NextLink` function
 * itself across the server/client boundary — React rejects function props there
 * (same rule as the `Icon` note in `services.ts`).
 *
 * Defaults to `underline="none"` to match the static site's `a { text-decoration: none }`.
 */
export default function AppLink({ href, underline = 'none', ...rest }: AppLinkProps) {
  return <Link component={NextLink} href={href} underline={underline} {...rest} />;
}
