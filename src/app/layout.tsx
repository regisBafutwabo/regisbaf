import 'styles/globals.css';

import type { ReactNode } from 'react';

import {
  Footer,
  Header,
} from 'components/AppLayout/components';
import { theme } from 'config/theme';
import { SEO_CONTENT } from 'constants/content';
import type {
  Metadata,
  Viewport,
} from 'next';

import {
  Box,
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

export default function RootLayout({ children }: { children: ReactNode }) {
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
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
