import { Box, Text } from '@chakra-ui/react';
import { MotionBox } from 'lib/Motion';

export const Blog = () => {
  return (
    <MotionBox animate={{ x: 0 }} initial={{ x: '-100vw' }} paddingX={[0, 4, 4, 8]} paddingY={8} height="60vh">
      <Text fontFamily={'heading'} fontSize="2xl" textAlign={'center'}>
        Welcome To My Blog Section
      </Text>

      <Box paddingY={8} textAlign="center">
        <Text> Please come back later.</Text>
        {/* <Box style={{ textAlign: '-webkit-center' }}>
          <Img src="/sailor3.svg" objectFit={'fill'} width={500} />
        </Box> */}
      </Box>
    </MotionBox>
  );
};
