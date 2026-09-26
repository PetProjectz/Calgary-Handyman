import * as React from 'react';
import type { Metadata, Viewport } from 'next';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '@/theme';
import AppShell from '@/app/AppShell';
import { ogImages, siteUrl, twitterImages } from '@/seo';

const description =
  'Trusted, local & professional handyman services in Calgary. Plumbing, painting, flooring, drywall, ceiling repair, electrical, glass & carpentry. Get a free estimate today.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Calgary Handyman | Reliable Handyman Services in Calgary, AB',
    template: '%s | Calgary Handyman',
  },
  description,
  keywords: [
    'calgary handyman',
    'handyman calgary',
    'handyman services calgary',
    'home repair calgary',
    'plumbing repair calgary',
    'painting calgary',
    'floor installation calgary',
    'drywall repair calgary',
    'ceiling repair calgary',
    'electrical repair calgary',
    'glass repair calgary',
    'carpentry repair calgary',
  ],
  authors: [{ name: 'Calgary Handyman' }],
  creator: 'Calgary Handyman',
  publisher: 'Calgary Handyman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteUrl,
    siteName: 'Calgary Handyman',
    title: 'Calgary Handyman | Reliable Handyman Services in Calgary, AB',
    description,
    images: ogImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Calgary Handyman | Reliable Handyman Services in Calgary, AB',
    description,
    images: twitterImages,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: '#0c3327',
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en-CA">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppShell>
              {props.children}
            </AppShell>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
