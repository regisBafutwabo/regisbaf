import CurrentlyPlaying from './components/CurrentlyPlaying';
import { FooterLinks } from './components/FooterLinks';
import { Container } from './styles';

export const Footer = () => {
  return (
    <Container borderTopColor={'gray.700'} borderTopWidth="1px">
      <CurrentlyPlaying />
      <FooterLinks />
    </Container>
  );
};
