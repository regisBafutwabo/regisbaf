'use client';
import { CONTENTS } from 'constants/content';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import { Box, Link as ExternalLink, useColorMode } from '@chakra-ui/react';

export const FooterLinks = () => {
  const { colorMode } = useColorMode();
  const {
    footer: { linkedin, github },
  } = CONTENTS;

  return (
    <Box display="flex" flexDirection={'row'} gap={4}>
      <ExternalLink href={github} target="_blank" rel="noopener noreferrer">
        <SiGithub size="30" />
      </ExternalLink>
      <ExternalLink href={linkedin} target="_blank" rel="noopener noreferrer">
        <SiLinkedin size="30" />
      </ExternalLink>
    </Box>
  );
};
