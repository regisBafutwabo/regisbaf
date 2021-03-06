export type MobileMenuProps = {
  open: boolean;
  colorMode: 'dark' | 'light';
  closeModal: () => void;
  toggleMode: () => void;
  IconVariant: {
    hidden: any;
    visible: any;
  };
};
