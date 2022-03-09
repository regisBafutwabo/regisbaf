import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Footer, Header } from './components';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      maxWidth={1080}
      mr={[4, 4, 4, 'auto']}
      pr={[0, 0, 0, 8]}
      ml={[4, 4, 4, 'auto']}
      pl={[0, 0, 0, 8]}
    >
      <Header />
      {children}
      <Footer />
    </Box>
  );
};
