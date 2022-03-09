import 'config/theme/styles/globals.css';

import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import { AppLayout } from 'components/_layout';
import { theme } from 'config/theme';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [colorMode, setColorMode] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    if (window) {
      const isDark = window.localStorage.getItem('prefers-dark');
      if (!isDark) {
        window.localStorage.setItem('prefers-dark', 'false');
        setColorMode('light');
      } else {
        setColorMode(isDark === 'false' ? 'light' : 'dark');
      }
    }
  }, []);

  const config: ThemeConfig = {
    initialColorMode: colorMode,
    useSystemColorMode: false,
  };

  const updatedTheme = extendTheme({ ...theme, config: { ...theme.config, config } });

  return (
    <ChakraProvider theme={updatedTheme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
}

export default MyApp;
