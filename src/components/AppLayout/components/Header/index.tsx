'use client';
import { useState } from 'react';

import { CONTENTS } from 'constants/content';
import { MotionIconButton } from 'lib/Motion';
import Link from 'next/link';

import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  useColorMode,
} from '@chakra-ui/react';

import { DesktopMenu } from './Components/DesktopMenu';
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

  // Remove unnecessary window check; the component is client-side.
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
        <Link href="/">
          <Box mr={10} _hover={{ cursor: 'pointer' }}>
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
        </Link>
        <DesktopMenu
          toggleMode={toggleMode}
          colorMode={colorMode}
          openModal={openModal}
          IconVariant={IconVariant}
        />
        <MotionIconButton
          display={{ base: 'block', lg: 'none' }}
          aria-label="hamburger-icon"
          _focus={{ outline: 0 }}
          backgroundColor="transparent"
          onClick={openModal}
        >
          <HamburgerIcon w={8} h={8} />
        </MotionIconButton>
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
