'use client';
import { CONTENTS } from 'constants/content';
import { MOBILE_SIZES } from 'constants/display';
import {
  MotionIconButton,
  MotionMoonIcon,
  MotionSunIcon,
  MotionText,
} from 'lib/Motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';

import { DesktopMenuProps } from './DesktopMenu.interface';

export const DesktopMenu = (props: DesktopMenuProps) => {
  const { toggleMode, colorMode, openModal, IconVariant } = props;
  const { push } = useRouter();
  const pathname = usePathname();
  const variant = useBreakpointValue(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']);

  return (
    <>
      <Box
        display={'flex'}
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
          display={['none', 'none', 'none', 'flex']}
          flexDir="row"
          alignItems={'center'}
          mt={2}
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
      {MOBILE_SIZES.includes(variant as string) ? (
        <MotionIconButton
          aria-label="hamburger-icon"
          _focus={{ outline: 0 }}
          backgroundColor="transparent"
          onClick={openModal}
        >
          <HamburgerIcon w={8} h={8} />
        </MotionIconButton>
      ) : (
        <Box display={['none', 'none', 'none', 'flex']}>
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
      )}
    </>
  );
};
