import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, IconButton, Text, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';

import { MobileMenu } from './Components';
import { Nav } from './styles';

const MOBILE_SIZES = ['xs', 'sm', 'md'];
// const MotionText = motion<TextProps>(Text);

export const Header = () => {
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
        <Box mr={10}>
          <Text fontFamily={'heading'} bgGradient="linear(to-r,#007BD3, #007311)" bgClip="text" fontSize="2xl" fontWeight="extrabold">
            Regis Bafutwabo
          </Text>
        </Box>
        <Box display={['none', 'none', 'none', 'flex']} flexDir="row" alignItems={'center'} mt={2}>
          <Box mr={5}>
            <Link href={'/resume'} passHref>
              <Text fontWeight={'semibold'} fontSize="md" cursor={'pointer'}>
                Resume
              </Text>
            </Link>
          </Box>
          <Box>
            <Link href={'/blog'} passHref>
              <Text fontWeight={'semibold'} fontSize="md" cursor={'pointer'} animation="linear ">
                Blog
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
