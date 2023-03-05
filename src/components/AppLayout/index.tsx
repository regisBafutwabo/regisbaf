import { ReactNode } from 'react';

import { MotionBox } from 'lib/Motion';

import { Box } from '@chakra-ui/react';

import { Footer, Header } from './components';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MotionBox
      animate={{ y: 24 }}
      intial={{ y: 1000 }}
      transition={{ duration: 100.5, type: 'spring', stiffness: 600 }}
      maxWidth={1080}
      mr={[4, 4, 4, 'auto']}
      pr={[0, 0, 0, 8]}
      ml={[4, 4, 4, 'auto']}
      pl={[0, 0, 0, 8]}
    >
      <Header />
      <Box marginBottom={8} minHeight="100vh" overflowY="scroll">
        {children}
      </Box>
      <Footer />
    </MotionBox>
  );
};
