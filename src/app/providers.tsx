'use client';

import { useEffect, useState } from 'react';

import { theme } from 'config/theme';

import { CacheProvider } from '@chakra-ui/next-js';
import {
  ChakraProvider,
  ColorModeScript,
  localStorageManager,
} from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { Analytics } from '@vercel/analytics/react';

export default function Providers({ children }: { children: React.ReactNode }) {
  // Use a mounting flag to ensure we don't render the UI until the client has mounted,
  // avoiding hydration mismatches.
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // While waiting for mount, render only the ColorModeScript.
  if (!isMounted) {
    return (
      <ColorModeScript
        initialColorMode={theme.config.initialColorMode || 'light'}
      />
    );
  }

  return (
    <CacheProvider>
      <ChakraProvider theme={theme} colorModeManager={localStorageManager}>
        {/* Ensure the correct initial color mode is set */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <MDXProvider>{children}</MDXProvider>
        <Analytics />
      </ChakraProvider>
    </CacheProvider>
  );
}
