import { Container } from '@chakra-ui/react';

import CurrentlyPlaying from './components/CurrentlyPlaying';
import { FooterLinks } from './components/FooterLinks';

export const Footer = () => {
  return (
    <footer
      style={{
        paddingTop: 8,
        borderTopWidth: '1px',
        backgroundColor: 'inherit',
        marginTop: '32px',
      }}
    >
      <Container
        maxW="container.lg"
        display="flex"
        flexDirection={['column', 'row']}
        gap={[4, 8]}
        paddingY={4}
        justifyContent="space-between"
      >
        <CurrentlyPlaying />
        <FooterLinks />
      </Container>
    </footer>
  );
};
