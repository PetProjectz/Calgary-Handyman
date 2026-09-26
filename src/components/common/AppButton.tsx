'use client';

import * as React from 'react';
import NextLink from 'next/link';

import Button, { type ButtonProps } from '@mui/material/Button';

type AppButtonProps = Omit<ButtonProps<'a'>, 'component' | 'href'> & {
  href: string;
};

/**
 * MUI `Button` rendered as a `next/link`, and the button counterpart to
 * `AppLink`. Server Components must use this rather than
 * `<Button component={NextLink}>`, because passing the `NextLink` function
 * across the server/client boundary is rejected by React.
 */
export default function AppButton({ href, ...rest }: AppButtonProps) {
  return <Button component={NextLink} href={href} {...rest} />;
}
