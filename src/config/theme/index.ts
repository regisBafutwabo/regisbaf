import '@fontsource/geist-sans';
import '@fontsource/geist-mono';

import { extendTheme } from '@chakra-ui/react';

const colors = {};

const fonts = {
  body: `'Geist Sans', sans-serif`,
  mono: `'Geist Mono', monospace`,
  heading: 'Nunito',
};

export const theme = extendTheme({ colors, fonts });
