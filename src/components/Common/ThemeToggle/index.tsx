import {
  MotionIconButton,
  MotionMoonIcon,
  MotionSunIcon,
} from 'lib/Motion';

import { useColorMode } from '@chakra-ui/react';

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

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleMode = () => {
    if (colorMode === 'dark') {
      toggleColorMode();
      localStorage.setItem('prefers-dark', 'false');
    } else if (colorMode === 'light') {
      toggleColorMode();
      localStorage.setItem('prefers-dark', 'true');
    }
  };

  return (
    <>
      <MotionIconButton
        transition={{ delay: 1.5 }}
        aria-label="color-mode"
        _focus={{ outline: 0, backgroundColor: 'transparent' }}
        backgroundColor="transparent"
        onClick={toggleMode}
        type="button"
      >
        {colorMode === 'light' ? (
          <MotionMoonIcon
            variants={IconVariant}
            color={colorMode === 'light' ? 'gray.600' : 'gray.200'}
            initial="hidden"
            animate="visible"
          />
        ) : (
          <MotionSunIcon
            variants={IconVariant}
            initial="hidden"
            animate="visible"
          />
        )}
      </MotionIconButton>
    </>
  );
};
