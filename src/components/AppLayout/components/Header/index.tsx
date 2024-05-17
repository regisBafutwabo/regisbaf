'use client';
import { useState } from 'react';

import { useColorMode } from '@chakra-ui/react';

import { DesktopMenu, MobileMenu } from './Components';
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
    <div
      style={{
        width: '100%',
        position: 'sticky',
        top: 0,
        backgroundColor: 'inherit',
        zIndex: 2,
      }}
    >
      <Nav
        pt={[4, 4, 4, 8]}
        pb={[4, 4, 4, 4]}
        mx={4}
        justifyContent={[
          'space-between',
          'space-between',
          'space-between',
          'space-between',
          'space-around',
        ]}
      >
        <DesktopMenu
          toggleMode={toggleMode}
          colorMode={colorMode}
          openModal={openModal}
          IconVariant={IconVariant}
        />
        {isModalOpen && (
          <MobileMenu
            open={isModalOpen}
            closeModal={() => {
              setIsModalOpen(false);
            }}
            toggleMode={toggleMode}
            colorMode={colorMode}
            IconVariant={IconVariant}
          />
        )}
      </Nav>
    </div>
  );
};
