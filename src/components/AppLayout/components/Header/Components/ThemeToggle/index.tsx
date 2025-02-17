import { useThemeToggle } from 'hooks/useThemeToggle';
import {
  MotionIconButton,
  MotionMoonIcon,
  MotionSunIcon,
} from 'lib/Motion';

import { useColorModeValue } from '@chakra-ui/react';

import { ICON_VARIANTS } from '../../animation';

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useThemeToggle();
  const iconColor = useColorModeValue('gray.800', 'white');

  return (
    <MotionIconButton
      transition={{ delay: 1.5 }}
      aria-label="color-mode"
      _focus={{ outline: 0, backgroundColor: 'transparent' }}
      backgroundColor="transparent"
      onClick={toggleTheme}
    >
      {isDarkMode ? (
        <MotionSunIcon
          variants={ICON_VARIANTS}
          initial="hidden"
          animate="visible"
          color={iconColor}
        />
      ) : (
        <MotionMoonIcon
          variants={ICON_VARIANTS}
          initial="hidden"
          animate="visible"
        />
      )}
    </MotionIconButton>
  );
};
