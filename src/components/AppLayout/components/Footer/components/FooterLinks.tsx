import { CONTENTS } from 'constants/content';
import { MotionText } from 'lib/Motion';
import Link from 'next/link';

import {
  Box,
  Link as ExternalLink,
  useColorMode,
} from '@chakra-ui/react';

export const FooterLinks = () => {
  const { colorMode } = useColorMode();
  const {
    footer: { links, linkedin, github },
  } = CONTENTS;

  return (
    <Box
      display="flex"
      flexDirection={['column', 'column', 'row', 'row']}
      padding={8}
      width="100%"
      gap={[8, 8, 32, 32]}
    >
      <Box display="flex" flexDirection="column" gap={2}>
        {links.map((link) => (
          <Link href={link.value} passHref key={link.value}>
            <MotionText
              whileHover={{
                scale: 1.1,
                textShadow: `0px 0px 8px ${
                  colorMode === 'light' ? 'rgb(0,0,0)' : 'rgb(255,255,255)'
                }`,
                textDecoration: 'underline',
              }}
            >
              {link.title}
            </MotionText>
          </Link>
        ))}
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        <ExternalLink
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MotionText
            whileHover={{
              scale: 1.1,
              textShadow: `0px 0px 8px ${
                colorMode === 'light' ? 'rgb(0,0,0)' : 'rgb(255,255,255)'
              }`,
              textDecoration: 'underline',
            }}
          >
            Github
          </MotionText>
        </ExternalLink>
        <ExternalLink
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MotionText
            whileHover={{
              scale: 1.1,
              textShadow: `0px 0px 8px ${
                colorMode === 'light' ? 'rgb(0,0,0)' : 'rgb(255,255,255)'
              }`,
              textDecoration: 'underline',
            }}
          >
            Linkedin
          </MotionText>
        </ExternalLink>
      </Box>
    </Box>
  );
};
