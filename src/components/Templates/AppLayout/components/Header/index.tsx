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
  // const [isModalOpen, setIsModalOpen] = useState(false);

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
    // setIsModalOpen(true);
  };

  return (
    <Nav mt={[4, 4, 4, 8]} mb={[4, 4, 4, 4]}>
      <DesktopMenu
        toggleMode={toggleMode}
        colorMode={colorMode}
        openModal={openModal}
        IconVariant={IconVariant}
      />
      <MobileMenu
        open={false}
        closeModal={() => {}}
        toggleMode={toggleMode}
        colorMode={colorMode}
        IconVariant={IconVariant}
      />
    </Nav>
  );
};
