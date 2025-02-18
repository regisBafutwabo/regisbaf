import 'styles/globals.css';

import type { ReactNode } from 'react';

import { Footer, Header } from 'components/AppLayout/components';
import { theme } from 'config/theme';
import { SEO_CONTENT } from 'constants/content';
import { spotifyApi } from 'lib/spotify/spotify';
import type { Metadata, Viewport } from 'next';

import { Box, ColorModeScript, Container } from '@chakra-ui/react';

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
          name="keywords"
          content="HTML, CSS, JavaScript, React, Next.js, React-native"
        />
        <meta name="author" content={SEO_CONTENT.name} />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#FFFFFF"
        />
      </head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
            overflowY="auto"
          >
            <Header />
            <Container maxW="container.lg" flex={1}>
              {children}
            </Container>
            <Footer currentlyPlaying={response} />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
