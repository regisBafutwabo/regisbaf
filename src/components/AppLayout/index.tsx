import type { ReactNode } from 'react';

import { Box } from '@chakra-ui/react';

import {
  Footer,
  Header,
} from './components';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Box marginBottom={8} minHeight="100vh" overflowY="scroll">
        {children}
      </Box>
      <Footer />
    </>
  );
};
