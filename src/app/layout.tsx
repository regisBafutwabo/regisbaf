import 'styles/globals.css';

import { ReactNode } from 'react';

import { Footer, Header } from 'components/AppLayout/components';
import { theme } from 'config/theme';
import { Martel } from 'next/font/google';
import Script from 'next/script';

import { Box, ColorModeScript } from '@chakra-ui/react';

import Providers from './providers';

const martel = Martel({
  subsets: ['latin'],
  variable: '--chakra-fonts-body',
  weight: '200',
});

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
          <Box marginBottom={8} minHeight="100vh" overflowY="scroll">
            {children}
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
