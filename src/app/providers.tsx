'use client';
import {
  useEffect,
  useState,
} from 'react';

import { theme } from 'config/theme';

import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { Analytics } from '@vercel/analytics/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [colorMode, setColorMode] = useState<'dark' | 'light'>('dark');

  const config: ThemeConfig = {
    initialColorMode: colorMode || 'system',
    useSystemColorMode: true,
  };

  const updatedTheme = extendTheme({
    ...theme,
    config: { ...theme.config, config },
  });

  useEffect(() => {
    const isDark = window.localStorage.getItem('prefers-dark');

    if (!isDark) {
      window.localStorage.setItem('prefers-dark', 'false');
      setColorMode('light');
    } else {
      setColorMode('dark');
    }
  }, []);

  return (
    <ChakraProvider theme={updatedTheme}>
      <MDXProvider>
        {children}
        <Analytics />
      </MDXProvider>
    </ChakraProvider>
  );
}
