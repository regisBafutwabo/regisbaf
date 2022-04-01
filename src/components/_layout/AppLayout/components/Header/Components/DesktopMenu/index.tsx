import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { MOBILE_SIZES } from 'constants/display';
import { LINKS_DATA } from 'constants/links';
import { motion } from 'framer-motion';
import { MotionIconButton, MotionMoonIcon, MotionSunIcon } from 'lib/Motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { DesktopMenuProps } from './DesktopMenu.interface';

const MotionText = motion(Text);

export const DesktopMenu = ({ toggleMode, colorMode, openModal }: DesktopMenuProps) => {
  const { pathname, push } = useRouter();
  const variant = useBreakpointValue(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']);

  return (
    <>
      <Box display={'flex'} alignItems="center" justifyContent={'center'} flexDir={'row'}>
        <Box mr={10} _hover={{ cursor: 'pointer' }} onClick={() => push('/')}>
          <Text fontFamily={'heading'} bgGradient="linear(to-r,#007BD3, #007311)" bgClip="text" fontSize="2xl" fontWeight="extrabold">
            Regis Bafutwabo
          </Text>
        </Box>
        <Box display={['none', 'none', 'none', 'flex']} flexDir="row" alignItems={'center'} mt={2}>
          {LINKS_DATA.map((linkData) => (
            <Box mr={5} key={linkData.value}>
              <Link href={linkData.value} passHref>
                <a>
                  <MotionText
                    whileHover={{ scale: 1.1, textShadow: `0px 0px 8px ${colorMode === 'light' ? 'rgb(0,0,0)' : 'rgb(255,255,255)'}` }}
                    fontWeight={pathname === linkData.value ? 700 : 'semibold'}
                    fontSize="md"
                    cursor={'pointer'}
                    textDecoration={pathname === linkData.value ? 'underline' : 'none'}
                  >
                    {linkData.title}
                  </MotionText>
                </a>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
      {MOBILE_SIZES.includes(variant as string) ? (
        <MotionIconButton aria-label="hamburger-icon" _focus={{ outline: 0 }} backgroundColor="transparent" onClick={openModal}>
          <HamburgerIcon w={8} h={8} />
        </MotionIconButton>
      ) : (
        <Box display={['none', 'none', 'none', 'flex']}>
          <MotionIconButton transition={{ delay: 1.5 }} aria-label="color-mode" _focus={{ outline: 0, backgroundColor: 'transparent' }} backgroundColor="transparent" onClick={toggleMode}>
            {colorMode === 'light' ? (
              <MotionMoonIcon animate={{ y: 0, width: 20, height: 20 }} initial={{ y: '-10vh', height: 0, width: 0 }} transition={{ type: 'spring', stiffness: 600 }} />
            ) : (
              <MotionSunIcon animate={{ y: 0, width: 20, height: 20 }} initial={{ y: '-10vh', height: 0, width: 0 }} transition={{ type: 'spring', stiffness: 600 }} />
            )}
          </MotionIconButton>
        </Box>
      )}
    </>
  );
};
