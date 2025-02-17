import { CONTENTS } from 'constants/content';
import {
  MotionCloseIcon,
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
  useColorMode,
} from '@chakra-ui/react';

import { ThemeToggle } from '../ThemeToggle';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { colorMode } = useColorMode();

  return (
    <Modal
      onClose={onClose}
      size={'full'}
      isOpen={isOpen}
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
          {CONTENTS.navbar.links.map((link) => (
            <Link href={link.value} onClick={onClose} key={link.value}>
              <MotionText
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ delay: link.delay }}
                fontSize={'3xl'}
                fontWeight="extrabold"
              >
                {link.title}
              </MotionText>
            </Link>
          ))}
        </ModalBody>
        <ModalFooter
          marginBottom={20}
          display={'flex'}
          justifyContent="flex-start"
        >
          <ThemeToggle />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
