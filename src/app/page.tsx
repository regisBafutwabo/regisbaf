import { AboutMe, MainHeader } from 'components/Main';

import { Box } from '@chakra-ui/react';

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
