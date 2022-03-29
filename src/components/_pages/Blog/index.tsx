import { Box, Text } from '@chakra-ui/react';

export const Blog = () => {
  return (
    <Box paddingX={[0, 4, 4, 8]} paddingY={8} height="60vh">
      <Text fontFamily={'heading'} fontSize="2xl" textAlign={'center'}>
        Welcome To My Blog Section
      </Text>

      <Box paddingY={8} textAlign="center">
        <Text> Please come back later.</Text>
        {/* <Box style={{ textAlign: '-webkit-center' }}>
          <Img src="/sailor3.svg" objectFit={'fill'} width={500} />
        </Box> */}
      </Box>
    </Box>
  );
};
