import { ColorMode } from '@chakra-ui/react';

export type DesktopMenuProps = {
  toggleMode: () => void;
  colorMode: ColorMode;
  openModal: () => void;
};
