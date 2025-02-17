import 'styles/globals.css';

import type { ReactNode } from 'react';

import { Footer, Header } from 'components/AppLayout/components';
import { SEO_CONTENT } from 'constants/content';
import type { Metadata, Viewport } from 'next';

import { Box, Container } from '@chakra-ui/react';

import Providers from './providers';

// const martel = Martel({
//   subsets: ['latin'],
//   variable: '--chakra-fonts-body',
//   weight: '200',
// });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  authors: [{ name: SEO_CONTENT.name }],
  keywords: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'React-native'],
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
    <html lang="en" suppressHydrationWarning>
      <body>
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
