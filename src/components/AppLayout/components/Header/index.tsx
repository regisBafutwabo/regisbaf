'use client';
import { useState } from 'react';

import { useColorMode } from '@chakra-ui/react';

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
    <div
      className="header"
      style={{
        width: '100%',
        maxWidth: '100vw',
        position: 'sticky',
        top: 0,
        backgroundColor: 'inherit',
        zIndex: 2,
      }}
    >
      <Nav
        pt={[4, 4, 4, 8]}
        pb={[4, 4, 4, 4]}
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
    </div>
  );
};
