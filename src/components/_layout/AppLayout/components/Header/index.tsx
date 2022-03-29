import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, IconButton, Text, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import { MOBILE_SIZES } from 'constants/display';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { MobileMenu } from './Components';
import { Nav } from './styles';

export const Header = () => {
  const { pathname, push } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();
  const variant = useBreakpointValue(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMode = () => {
    if (colorMode === 'dark' && window) {
      toggleColorMode();
      window.localStorage.setItem('prefers-dark', 'false');
    } else if (colorMode === 'light' && window) {
      toggleColorMode();
      window.localStorage.setItem('prefers-dark', 'true');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Nav mt={[4, 4, 4, 8]} mb={[4, 4, 4, 4]}>
      <Box display={'flex'} alignItems="center" justifyContent={'center'} flexDir={'row'}>
        <Box mr={10} _hover={{ cursor: 'pointer' }} onClick={() => push('/')}>
          <Text fontFamily={'heading'} bgGradient="linear(to-r,#007BD3, #007311)" bgClip="text" fontSize="2xl" fontWeight="extrabold">
            Regis Bafutwabo
          </Text>
        </Box>
        <Box display={['none', 'none', 'none', 'flex']} flexDir="row" alignItems={'center'} mt={2}>
          <Box mr={5}>
            <Link href={'/'} passHref>
              <Text fontWeight={pathname === '/' ? 700 : 'semibold'} fontSize="md" cursor={'pointer'} textDecoration={pathname === '/' ? 'underline' : 'none'}>
                About Me
              </Text>
            </Link>
          </Box>
          <Box mr={5}>
            <Link href={'/blog'} passHref>
              <Text fontWeight={pathname === '/blog' ? 700 : 'semibold'} fontSize="md" cursor={'pointer'} animation="linear" textDecoration={pathname === '/blog' ? 'underline' : 'none'}>
                Blog
              </Text>
            </Link>
          </Box>
          <Box>
            <Link href={'/top-tracks'} passHref>
              <Text
                fontSize="md"
                fontWeight={pathname === '/top-tracks' ? 700 : 'semibold'}
                cursor={'pointer'}
                animation="linear"
                textDecoration={pathname === '/top-tracks' ? 'underline' : 'none'}
                style={{ textDecoration: '' }}
              >
                Top Tracks
              </Text>
            </Link>
          </Box>
        </Box>
      </Box>
      {MOBILE_SIZES.includes(variant as string) ? (
        <IconButton aria-label="hamburger-icon" _focus={{ outline: 0 }} backgroundColor="transparent" onClick={openModal}>
          <HamburgerIcon w={8} h={8} />
        </IconButton>
      ) : (
        <Box display={['none', 'none', 'none', 'flex']}>
          <IconButton aria-label="color-mode" _focus={{ outline: 0 }} backgroundColor="transparent" onClick={toggleMode}>
            {colorMode === 'light' ? <MoonIcon w={5} h={5} /> : <SunIcon w={5} h={5} />}
          </IconButton>
        </Box>
      )}
      <MobileMenu open={isModalOpen} closeModal={() => setIsModalOpen(false)} toggleMode={toggleMode} colorMode={colorMode} />
    </Nav>
  );
};
