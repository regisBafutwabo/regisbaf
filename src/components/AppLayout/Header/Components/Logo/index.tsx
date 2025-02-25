import { CONTENTS } from 'constants/content';
import Link from 'next/link';

import {
  Box,
  Text,
} from '@chakra-ui/react';

export const Logo = () => {
  return (
    <Link href="/">
      <Box mr={10} _hover={{ cursor: 'pointer' }}>
        <Text
          fontFamily={'heading'}
          bgGradient="linear(to-r,#007BD3, #007311)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="extrabold"
        >
          {CONTENTS.navbar.logo}
        </Text>
      </Box>
    </Link>
  );
};
