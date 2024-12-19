import 'styles/globals.css';

import { ReactNode } from 'react';

import { Footer, Header } from 'components/AppLayout/components';
import { theme } from 'config/theme';
import { SEO_CONTENT } from 'constants/content';
import { Metadata, Viewport } from 'next';
import { Martel } from 'next/font/google';
import Script from 'next/script';

import { Box, ColorModeScript, Container } from '@chakra-ui/react';

import Providers from './providers';

const martel = Martel({
  subsets: ['latin'],
  variable: '--chakra-fonts-body',
  weight: '200',
});

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
          content="HTML, CSS, JavaScript, NextJS, React, Nextjs, react, React-native"
        />
        <meta name="author" content={SEO_CONTENT.name} />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`,
          }}
        />
      </head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <Box display="flex" flexDirection="column" overflowY="auto">
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
