import '@fontsource/geist-sans';
import '@fontsource/geist-mono';

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `'Martel Sans', sans-serif`,
    body: `'Geist Sans', sans-serif`,
    mono: `'Geist Mono', monospace`,
  },
});

export default theme;
