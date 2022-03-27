import { Box, Img } from '@chakra-ui/react';

export const MainHeader = () => {
  return (
    <Box>
      <Img borderRadius="full" objectFit="contain" boxSize={['100px', '200px', '200px', '200px']} src="/profile.jpeg" alt="Regis" />
    </Box>
  );
};
