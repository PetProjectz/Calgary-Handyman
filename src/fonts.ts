/**
 * Font definitions, in a plain (non-"use client") module so Server Components
 * can read the font-family strings directly. theme.ts is "use client", so
 * importing a value from it in a Server Component would yield a client reference.
 */
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const poppins = Poppins({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

/** Body copy. */
export const bodyFontFamily = inter.style.fontFamily;

/** Headings, buttons and eyebrows. */
export const displayFontFamily = poppins.style.fontFamily;
