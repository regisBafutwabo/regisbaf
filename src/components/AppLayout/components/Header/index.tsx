'use client';
import { useState } from 'react';

import {
  Box,
  useColorMode,
} from '@chakra-ui/react';

import { DesktopMenu } from './Components/DesktopMenu';
import { Logo } from './Components/Logo';
import { MenuButton } from './Components/MenuButton';
import { MobileMenu } from './Components/MobileMenu';
import { Nav } from './styles';

const IconVariant = {
  hidden: {
    y: '-10vh',
    height: 0,
    width: 0,
  },
  visible: {
    y: 0,
    width: 20,
    height: 20,
    transition: { type: 'spring', stiffness: 600 },
  },
};

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMode = () => {
    if (colorMode === 'dark') {
      toggleColorMode();
      window.localStorage.setItem('prefers-dark', 'false');
    } else if (colorMode === 'light') {
      toggleColorMode();
      window.localStorage.setItem('prefers-dark', 'true');
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <Box
      padding={{ base: '0 8px', lg: '0 16px' }}
      position="fixed"
      width="100%"
      maxW="100vw"
      top={0}
      bg={colorMode === 'dark' ? 'gray-800' : 'white'}
      zIndex={2}
    >
      <Nav
        pt={{ base: 4, lg: 8 }}
        pb={4}
        justifyContent={{ base: 'space-between', lg: 'space-around' }}
      >
        <Logo />
        <DesktopMenu
          toggleMode={toggleMode}
          colorMode={colorMode}
          openModal={openModal}
          IconVariant={IconVariant}
        />
        <MenuButton openModal={openModal} />
        {isModalOpen && (
          <MobileMenu
            open={isModalOpen}
            closeModal={() => setIsModalOpen(false)}
            toggleMode={toggleMode}
            colorMode={colorMode}
            IconVariant={IconVariant}
          />
        )}
      </Nav>
    </Box>
  );
};
