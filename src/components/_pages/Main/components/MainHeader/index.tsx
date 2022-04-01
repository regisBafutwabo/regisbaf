import { Box } from '@chakra-ui/react';
import { MotionImage } from 'lib/Motion';

export const MainHeader = () => {
  return (
    <Box>
      <MotionImage
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        borderRadius="full"
        objectFit="contain"
        boxSize={['100px', '200px', '200px', '200px']}
        src="/profile.jpeg"
        alt="Regis"
      />
    </Box>
  );
};
