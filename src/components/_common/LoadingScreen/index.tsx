import { Box, Spinner } from '@chakra-ui/react';

export const LoadingScreen = () => {
  return (
    <Box
      display={'flex'}
      alignItems="center"
      justifyContent="center"
      width="100%"
      height={'100vh'}
    >
      <Spinner size="xl" />
    </Box>
  );
};
