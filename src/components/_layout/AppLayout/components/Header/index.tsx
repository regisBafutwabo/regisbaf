import { useColorMode } from '@chakra-ui/react';
import { useState } from 'react';

import { DesktopMenu, MobileMenu } from './Components';
import { Nav } from './styles';

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
    <Nav mt={[4, 4, 4, 8]} mb={[4, 4, 4, 4]}>
      <DesktopMenu toggleMode={toggleMode} colorMode={colorMode} openModal={openModal} />
      <MobileMenu open={isModalOpen} closeModal={() => setIsModalOpen(false)} toggleMode={toggleMode} colorMode={colorMode} />
    </Nav>
  );
};
