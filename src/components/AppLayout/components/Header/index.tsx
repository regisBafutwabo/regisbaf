'use client';
import { useState } from 'react';

import { MotionIconButton } from 'lib/Motion';

import { HamburgerIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

import { DesktopMenu } from './Components/DesktopMenu';
import { MobileMenu } from './Components/MobileMenu';
import { Nav } from './styles';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      backgroundColor="inherit"
      zIndex={2}
      width="100%"
      maxWidth="100vw"
    >
      <Nav pt={[4, 4, 4, 8]} pb={[4, 4, 4, 4]}>
        <DesktopMenu />
        <Box display={{ base: 'block', lg: 'none' }} visibility="visible">
          <MotionIconButton
            aria-label="menu"
            _focus={{ outline: 0 }}
            backgroundColor="transparent"
            onClick={() => setIsModalOpen(true)}
          >
            <HamburgerIcon w={8} h={8} />
          </MotionIconButton>
          <MobileMenu
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </Box>
      </Nav>
    </Box>
  );
};
