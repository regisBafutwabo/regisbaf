import 'styles/globals.css';

import { useEffect, useState } from 'react';

import { AppLayout } from 'components/AppLayout';
import { theme } from 'config/theme';
import Tracking from 'lib/ga';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useState<'dark' | 'light'>('dark');
  const router = useRouter();

  const config: ThemeConfig = {
    initialColorMode: colorMode,
    useSystemColorMode: false,
  };

  const updatedTheme = extendTheme({
    ...theme,
    config: { ...theme.config, config },
  });

  useEffect(() => {
    if (window) {
      const isDark = window.localStorage.getItem('prefers-dark');

      if (!isDark) {
        window.localStorage.setItem('prefers-dark', 'false');
        setColorMode('light');
      } else {
        setColorMode('dark');
      }
    }
  }, []);

  useEffect(() => {
    const routeChangeComplete = (url: string) => {
      Tracking.pageView(url);
    };

    router.events.on('routeChangeComplete', routeChangeComplete);
  }, [router.events]);

  return (
    <ChakraProvider theme={updatedTheme}>
      <AppLayout>
        <MDXProvider>
          <Component {...pageProps} />
          <Analytics />
        </MDXProvider>
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
