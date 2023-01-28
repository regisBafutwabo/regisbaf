import { Box } from '@chakra-ui/react';
import { AboutMe } from './components/AboutMe';

import { MainHeader } from './components/MainHeader';

export const Main = () => {
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
};
