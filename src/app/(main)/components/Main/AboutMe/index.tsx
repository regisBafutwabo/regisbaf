import { CONTENTS } from 'constants/content';
import { MotionBox, MotionText } from 'lib/Motion';

import { Box, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';

export const AboutMe = () => {
  const {
    about: { salutation, briefDescription, hobbies, skills },
  } = CONTENTS;
  return (
    <MotionBox
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      width={['100%', '100%', '100%', '80%']}
      marginTop={'50'}
    >
      <MotionBox>
        <span
          style={{
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}
        >
          {salutation}
        </span>
        {briefDescription}
      </MotionBox>

      <MotionBox width={['100%', '100%', '100%', '80%']}>
        <p style={{ padding: '32px 0px' }}>
          Some of the technologies that I have used include but not limited to:
        </p>

        <UnorderedList
          spacing={3}
          display="flex"
          flexDirection={'column'}
          flexWrap="wrap"
        >
          {skills.map((tech) => (
            <ListItem
              key={tech.link}
              as="li"
              // transition={{ type: 'spring', stiffness: 300 }}
              // whileHover={{ scale: 1.05, originX: 0 }}
              // whileTap={{ scale: 0.99 }}
              style={{ listStyleType: 'none', display: 'flex' }}
            >
              <Link
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                flexDirection={'row'}
                alignItems="center"
                gap={4}
              >
                {tech.icon}
                {tech.status === 'loading' ? (
                  <Box display="flex" flexDirection="row">
                    <Text color="#ababab">{tech.name}</Text>
                    <Text>: loading...</Text>
                  </Box>
                ) : (
                  <Text>{tech.name}</Text>
                )}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <MotionText paddingTop={8}>{hobbies}</MotionText>
      </MotionBox>
    </MotionBox>
  );
};
