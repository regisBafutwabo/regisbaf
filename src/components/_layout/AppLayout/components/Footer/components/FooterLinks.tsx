import { Box, Text, Link as ExternalLink } from '@chakra-ui/react';
import Link from 'next/link';

export const FooterLinks = () => {
  return (
    <Box display="flex" flexDirection={['column', 'column', 'row', 'row']} padding={8} width="100%" gap={[8, 8, 32, 32]}>
      <Box display="flex" flexDirection="column" gap={2}>
        <Link href={'/'} passHref>
          <Text _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>Home</Text>
        </Link>
        <Link href={'/blog'} passHref>
          <Text _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>Blog</Text>
        </Link>
        <Link href={'/top-tracks'} passHref>
          <Text _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>Top Tracks</Text>
        </Link>
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <ExternalLink href={'https://github.com/regisBafutwabo'} target="_blank" rel="noopener noreferrer">
          Github
        </ExternalLink>
        <ExternalLink href={'https://linkedin.com/in/regis-bafutwabo'} target="_blank" rel="noopener noreferrer">
          Linkedin
        </ExternalLink>
      </Box>
    </Box>
  );
};
