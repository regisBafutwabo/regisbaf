'use client';
import { CONTENTS } from 'constants/content';
import {
  MotionIconButton,
  MotionMoonIcon,
  MotionSunIcon,
  MotionText,
} from 'lib/Motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Box, type ColorMode, Text } from '@chakra-ui/react';

type DesktopMenuProps = {
  toggleMode: () => void;
  colorMode: ColorMode;
  openModal: () => void;
  IconVariant: {
    hidden: any;
    visible: any;
  };
};

export const DesktopMenu = (props: DesktopMenuProps) => {
  const { toggleMode, colorMode, IconVariant } = props;
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
      <Box display={{ base: 'none', lg: 'flex' }}>
        <MotionIconButton
          transition={{ delay: 1.5 }}
          aria-label="color-mode"
          _focus={{ outline: 0, backgroundColor: 'transparent' }}
          backgroundColor="transparent"
          onClick={toggleMode}
        >
          {colorMode === 'light' ? (
            <MotionMoonIcon
              variants={IconVariant}
              color={colorMode === 'light' ? 'gray.600' : 'gray.200'}
              initial="hidden"
              animate="visible"
            />
          ) : (
            <MotionSunIcon
              variants={IconVariant}
              initial="hidden"
              animate="visible"
            />
          )}
        </MotionIconButton>
      </Box>
    </>
  );
};
