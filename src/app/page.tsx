import { AboutMe, MainHeader } from 'components/Main';

import { Box } from '@chakra-ui/react';
import { SEO_CONTENT } from 'constants/content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  ...SEO_CONTENT,
};

export default function MainPage() {
  return (
    <Box
      paddingY={8}
      paddingX={[0, 4, 4, 4]}
      display="flex"
      flexDirection="column"
      alignItems={'center'}
    >
      <MainHeader />
      <AboutMe />
    </Box>
  );
}
