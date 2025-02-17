'use client';
import { CONTENTS } from 'constants/content';
import { MotionText } from 'lib/Motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Box, Text } from '@chakra-ui/react';

import { ThemeToggle } from '../ThemeToggle';

export const DesktopMenu = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <>
      <Box
        display={{ base: 'none', lg: 'flex' }}
        alignItems="center"
        justifyContent={'center'}
        flexDir={'row'}
      >
        {/* Logo */}
        <Box mr={10} _hover={{ cursor: 'pointer' }} onClick={() => push('/')}>
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
        {/* Navbar */}
        <Box display="flex" flexDir="row" alignItems={'center'}>
          {CONTENTS.navbar.links.map((linkData) => (
            <Box mr={5} key={linkData.value}>
              <Link href={linkData.value}>
                <MotionText
                  whileHover={{
                    scale: 1.1,
                    textShadow: '0px 0px 8px rgb(0,0,0)',
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
      <ThemeToggle />
    </>
  );
};
