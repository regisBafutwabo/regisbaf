import { useColorMode } from '@chakra-ui/react';

export const useThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const toggleTheme = () => {
    toggleColorMode();
    window?.localStorage.setItem('prefers-dark', String(colorMode === 'light'));
  };

  return {
    colorMode,
    toggleTheme,
    isDarkMode: colorMode === 'dark',
  };
};
