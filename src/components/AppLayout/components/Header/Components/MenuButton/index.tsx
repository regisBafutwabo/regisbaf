import { MotionIconButton } from 'lib/Motion';

import { HamburgerIcon } from '@chakra-ui/icons';

type MenuButtonProps = {
  openModal: () => void;
};

export const MenuButton = ({ openModal }: MenuButtonProps) => {
  return (
    <MotionIconButton
      display={{ base: 'block', lg: 'none' }}
      aria-label="hamburger-icon"
      _focus={{ outline: 0 }}
      backgroundColor="transparent"
      onClick={openModal}
    >
      <HamburgerIcon w={8} h={8} />
    </MotionIconButton>
  );
};
