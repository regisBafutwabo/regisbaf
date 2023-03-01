import { MotionBox, MotionListItem, MotionText } from 'lib/Motion';

import { Box, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';

import { expertiseList, techList } from './data';

export const AboutMe = () => {
  return (
    <MotionBox
      animate={{ marginTop: 50 }}
      width={['100%', '100%', '100%', '80%']}
    >
      <MotionText fontStyle="italic" fontSize="xl">
        <span style={{ fontWeight: 'bold' }}>{`Hi, I'm Regis,`}</span>
        {` a front-end developer with experience working on complex web applications and blockchain-related projects, I have a strong technical background and a broad range of skills. My expertise includes:`}
        <UnorderedList
          marginTop={4}
          spacing={3}
          display="flex"
          paddingLeft={8}
          flexDirection={'column'}
        >
          {expertiseList.map((expertise) => (
            <ListItem key={expertise}>{expertise}</ListItem>
          ))}
        </UnorderedList>
      </MotionText>

      <MotionText fontSize="xl" animate={{ paddingTop: 32 }}>
        Some of the technologies that I have used include but not limited to:
      </MotionText>
      <MotionBox
        animate={{ padding: 32 }}
        width={['100%', '100%', '100%', '80%']}
      >
        <UnorderedList
          spacing={3}
          display="flex"
          flexDirection={'column'}
          flexWrap="wrap"
        >
          {techList.map((tech) => (
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
      </MotionBox>
      <MotionText>
        {`I am always eager to take on new challenges and expand my skills in the ever-changing world of technology.I also enjoy music, video games and exploring new places.`}
      </MotionText>
    </MotionBox>
  );
};
