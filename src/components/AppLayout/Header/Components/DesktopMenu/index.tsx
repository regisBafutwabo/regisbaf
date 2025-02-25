'use client';
import { Box } from '@chakra-ui/react';

import { NavLinks } from './NavLinks';
import { ThemeToggle } from '../../../../Common/ThemeToggle';

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
