import { CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Text } from '@chakra-ui/react';

import { MobileMenuProps } from './MobileMenu.interface';

export const MobileMenu = (props: MobileMenuProps) => {
  const { open, closeModal, toggleMode, colorMode } = props;

  return (
    <Modal onClose={closeModal} size={'full'} isOpen={open} motionPreset="slideInRight">
      <ModalOverlay />
      <ModalContent backgroundColor={colorMode === 'dark' ? 'hsla(210deg, 30%, 8%, 0.85)' : 'hsla(0deg, 0%, 100%, 0.85)'}>
        <ModalCloseButton _focus={{ outline: 0 }} p={8} backgroundColor="transparent">
          <CloseIcon w={45} h={45} />
        </ModalCloseButton>
        <ModalBody mt={200} display="flex" flexDir={'column'} gap={8}>
          <Link href={'/'} onClick={closeModal}>
            <Text fontSize={'3xl'} fontWeight="extrabold">
              About Me
            </Text>
          </Link>
          <Link href={'/blog'} onClick={closeModal}>
            <Text fontSize={'3xl'} fontWeight="extrabold">
              Blog
            </Text>
          </Link>
          <Link href={'/top-tracks'} onClick={closeModal}>
            <Text fontSize={'3xl'} fontWeight="extrabold">
              Top Tracks
            </Text>
          </Link>
        </ModalBody>
        <ModalFooter display={'flex'} justifyContent="flex-start">
          <IconButton aria-label="color-mode" _focus={{ outline: 0 }} backgroundColor="transparent" onClick={toggleMode}>
            {colorMode === 'light' ? <MoonIcon w={5} h={5} /> : <SunIcon w={5} h={5} />}
          </IconButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
