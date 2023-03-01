import {
  MotionCloseIcon,
  MotionIconButton,
  MotionMoonIcon,
  MotionSunIcon,
  MotionText,
} from 'lib/Motion';

import {
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/react';

import { MobileMenuProps } from './MobileMenu.interface';

const links = [
  {
    label: 'About Me',
    href: '/',
    delay: 0.2,
  },
  {
    label: 'Blog',
    href: '/blog',
    delay: 0.5,
  },
  {
    label: 'Top Tracks',
    href: '/top-tracks',
    delay: 0.8,
  },
];
export const MobileMenu = (props: MobileMenuProps) => {
  const { open, closeModal, toggleMode, colorMode, IconVariant } = props;

  return (
    <Modal
      onClose={closeModal}
      size={'full'}
      isOpen={open}
      motionPreset="slideInRight"
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor={
          colorMode === 'dark'
            ? 'hsla(210deg, 30%, 8%, 0.85)'
            : 'hsla(0deg, 0%, 100%, 0.85)'
        }
      >
        <ModalCloseButton
          _focus={{ outline: 0 }}
          p={8}
          backgroundColor="transparent"
        >
          <MotionCloseIcon
            _focus={{ outline: 0 }}
            animate={{ opacity: 1, width: 45, height: 45 }}
            initial={{ opacity: 0, height: 0, width: 0 }}
            transition={{ type: 'spring', stiffness: 600 }}
          />
        </ModalCloseButton>
        <ModalBody mt={100} display="flex" flexDir={'column'} gap={8}>
          {links.map((link) => (
            <Link href={link.href} onClick={closeModal} key={link.href}>
              <MotionText
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: link.delay }}
                fontSize={'3xl'}
                fontWeight="extrabold"
              >
                {link.label}
              </MotionText>
            </Link>
          ))}
        </ModalBody>
        <ModalFooter
          marginBottom={10}
          display={'flex'}
          justifyContent="flex-start"
        >
          <MotionIconButton
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 1.1 }}
            aria-label="color-mode"
            _focus={{ outline: 0, backgroundColor: 'transparent' }}
            backgroundColor="transparent"
            onClick={toggleMode}
          >
            {colorMode === 'light' ? (
              <MotionMoonIcon
                variants={IconVariant}
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
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
