'use client';
import { theme } from 'config/theme';

import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { Analytics } from '@vercel/analytics/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: true,
  }; 

  const updatedTheme = extendTheme({
    ...theme,
    config: { ...theme.config, config },
  });

  return (
    <ChakraProvider theme={updatedTheme}>
      <MDXProvider>
        {children}
        <Analytics />
      </MDXProvider>
    </ChakraProvider>
  );
}
