'use client';
import { Box } from '@chakra-ui/react';

import { ThemeToggle } from '../../../../../Common/ThemeToggle';
import { NavLinks } from './NavLinks';

export const DesktopMenu = () => {
  return (
    <>
      <NavLinks />
      <Box display={{ base: 'none', lg: 'flex' }}>
        <ThemeToggle />
      </Box>
    </>
  );
};
