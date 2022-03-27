import { Box, Img, Text } from '@chakra-ui/react';

export const Blog = () => {
  return (
    <Box paddingX={4} paddingY={8} height="60vh">
      <Text fontFamily={'heading'} fontSize="2xl">
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
