import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Calgary Handyman',
    short_name: 'Calgary Handyman',
    description:
      'Trusted, local & professional handyman services in Calgary. Get a free estimate today.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fcfbf8',
    theme_color: '#0c3327',
    icons: [
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
