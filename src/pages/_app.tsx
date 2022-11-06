import 'styles/globals.css';

import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { AppLayout } from 'components/layout';
import { theme } from 'config/theme';
import Tracking from 'lib/ga';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MDXProvider } from '@mdx-js/react';
import Image from 'next/image';

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

  const ResponsiveImage = (props: any) => (
    <Image alt={props.alt} layout="responsive" {...props} />
  );

  const components = {
    img: ResponsiveImage,
  };

  return (
    <ChakraProvider theme={updatedTheme}>
      <AppLayout>
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
