import { CONTENTS } from 'constants/content';
import {
  MotionBox,
  MotionListItem,
  MotionText,
} from 'lib/Motion';

import {
  Box,
  Link,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

export const AboutMe = () => {
  const {
    about: { salutation, briefDescription, hobbies, skills },
  } = CONTENTS;
  return (
    <MotionBox
      animate={{ marginTop: 50 }}
      width={['100%', '100%', '100%', '80%']}
    >
      <MotionBox fontSize="xl">
        <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
          {salutation}
        </span>
        {briefDescription}
      </MotionBox>

      <MotionBox fontSize="xl" width={['100%', '100%', '100%', '80%']}>
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
            <MotionListItem
              key={tech.link}
              as="div"
              role={'listitem'}
              transition={{ type: 'spring', stiffness: 300 }}
              whileHover={{ scale: 1.05, originX: 0 }}
              whileTap={{ scale: 0.99 }}
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
            </MotionListItem>
          ))}
        </UnorderedList>
        <MotionText paddingTop={8}>{hobbies}</MotionText>
      </MotionBox>
    </MotionBox>
  );
};
