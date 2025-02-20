import { CONTENTS } from 'constants/content';
import { MotionText } from 'lib/Motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Box, useColorMode } from '@chakra-ui/react';

export const NavLinks = () => {
  const { colorMode } = useColorMode();

  const pathname = usePathname();

  return (
    <Box
      display={{ base: 'none', lg: 'flex' }}
      alignItems="center"
      justifyContent={'center'}
      flexDir={'row'}
    >
      <Box
        display={{ base: 'none', lg: 'flex' }}
        flexDir="row"
        alignItems={'center'}
      >
        {CONTENTS.navbar.links.map((linkData) => (
          <Box mr={5} key={linkData.value}>
            <Link href={linkData.value} passHref>
              <MotionText
                whileHover={{
                  scale: 1.1,
                  textShadow: `0px 0px 8px ${
                    colorMode === 'light' ? 'rgb(0,0,0)' : 'rgb(255,255,255)'
                  }`,
                }}
                fontWeight={pathname === linkData.value ? 700 : 'semibold'}
                fontSize="md"
                cursor={'pointer'}
                textDecoration={
                  pathname === linkData.value ||
                  (pathname?.includes('/blog') && linkData.value === '/blog')
                    ? 'underline'
                    : 'none'
                }
              >
                {linkData.title}
              </MotionText>
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
