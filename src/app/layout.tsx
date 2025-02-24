import './globals.css';

import type { ReactNode } from 'react';

import {
  Footer,
  Header,
} from 'components/AppLayout/components';
import { SEO_CONTENT } from 'constants/content';
import { spotifyApi } from 'lib/spotify/spotify';
import type {
  Metadata,
  Viewport,
} from 'next';

import {
  ColorModeScript,
  Container,
} from '@chakra-ui/react';

import Providers from './providers';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  ...SEO_CONTENT,
};

export default async function RootLayout({
  children,
}: { children: ReactNode }) {
  let response: any;
  try {
    response = await spotifyApi.getNowPlaying();
  } catch (error) {
    console.log('ERROR ehen fetching currently playing', error);
  }

  return (
    <html lang="en">
      <head>
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#FFFFFF"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#1a202c"
        />
      </head>
      <body>
        <ColorModeScript initialColorMode={'system'} />
        <Providers>
          <header>
            <Header />
          </header>
          <main style={{ minHeight: '100vh' }}>
            <Container maxW="container.lg" flex={1} mt={20}>
              {children}
            </Container>
          </main>
          <Footer currentlyPlaying={response} />
        </Providers>
      </body>
    </html>
  );
}
