import 'styles/globals.css';

import { ReactNode } from 'react';

import {
  Footer,
  Header,
} from 'components/AppLayout/components';
import { theme } from 'config/theme';
import {
  Metadata,
  Viewport,
} from 'next';
import { Martel } from 'next/font/google';
import Script from 'next/script';

import {
  Box,
  ColorModeScript,
  Container,
} from '@chakra-ui/react';

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
  title: 'Regis Bafutwabo – Software Developer',
  description: 'Front-end Developer, and sometimes Full-stack Developer',
  robots: 'follow, index',
  openGraph: {
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_URL}`,
    title: 'Regis Bafutwabo – Software Developer',
    description: 'Front-end Developer, and sometimes Full-stack Seveloper',
    images: [{ url: '/profile.webp', alt: 'Regis Baf' }],
  },
  twitter: {
    siteId: '@regiswareja',
    site: `${process.env.NEXT_PUBLIC_URL}`,
    title: 'Regis Bafutwabo – Software Developer',
    description: 'Front-end Developer, and sometimes Full-stack Seveloper',
    images: [{ url: '/profile.webp', alt: 'Regis Baf' }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={martel.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJS, React, Nextjs, react, React-native"
        />
        <meta name="author" content="Regis Bafutwabo" />
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
          <Header />
          <Box display="flex" flexDirection="column">
            <Container maxW="container.lg" flex={1} overflowY="auto">
              {children}
            </Container>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
