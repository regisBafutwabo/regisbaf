import { chakra } from '@chakra-ui/react';

export const Nav = chakra('nav', {
  baseStyle: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: { base: 4, md: 6, lg: 8 }, // adding some responsive padding
  },
});
