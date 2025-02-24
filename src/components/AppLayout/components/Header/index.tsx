'use client';
import { useState } from 'react';

import { useColorMode } from '@chakra-ui/react';

import { DesktopMenu } from './Components/DesktopMenu';
import { Logo } from './Components/Logo';
import { MenuButton } from './Components/MenuButton';
import { MobileMenu } from './Components/MobileMenu';
import { Nav } from './styles';

export const Header = () => {
  const { colorMode } = useColorMode();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
      <Nav
        padding={{ base: '0 8px', lg: '0 16px' }}
        position="fixed"
        width="100%"
        maxW="100vw"
        top={0}
        bgColor={colorMode === 'dark' ? '#1a202c' : 'white'}
        zIndex={2}
        pt={{ base: 4, lg: 8 }}
        pb={4}
        justifyContent={{ base: 'space-between' }}
      >
        <Logo />
        <DesktopMenu />
        <MenuButton openModal={openModal} />
        {isModalOpen && (
          <MobileMenu
            isOpen={isModalOpen}
            closeModal={() => setIsModalOpen(false)}
          />
        )}
      </Nav>
  );
};
