import { Container } from '@chakra-ui/react';

import CurrentlyPlaying from './components/CurrentlyPlaying';
import { FooterLinks } from './components/FooterLinks';

export const Footer = () => {
  return (
    <div
      style={{
        position: 'relative',
        paddingTop: 8,
        // marginRight: 'auto',
        // marginLeft: 'auto',
        // display: 'flex',
        // flexDirection: 'column',
        // alignItems: 'center',
        // justifyContent: 'center',
        // borderTopColor: 'gray[700]',
        borderTopWidth: '1px',
        backgroundColor: 'inherit',
      }}
    >
      <Container maxW="container.lg">
        <CurrentlyPlaying />
        <FooterLinks />
      </Container>
    </div>
  );
};
