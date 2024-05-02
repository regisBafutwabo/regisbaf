import CurrentlyPlaying from './components/CurrentlyPlaying';
import { FooterLinks } from './components/FooterLinks';

export const Footer = () => {
  return (
    <footer style={{
      paddingTop: 8,
      borderTopColor: 'gray.700',
      borderTopWidth: '1px',
    }}>
      <CurrentlyPlaying />
      <FooterLinks />
    </footer>
  );
};
