import { Box, Img, Link, Text, UnorderedList } from '@chakra-ui/react';
import { MotionBox, MotionListItem, MotionText } from 'lib/Motion';
import { DiReact } from 'react-icons/di';
import {
  SiAntdesign,
  SiApollographql,
  SiChakraui,
  SiGraphql,
  SiHasura,
  SiMaterialui,
  SiNestjs,
  SiStyledcomponents,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

import { TechListType } from './AboutMe.interface';

const techList: TechListType[] = [
  {
    name: 'React',
    link: 'https://reactjs.org/',
    icon: <DiReact color="#03d1f6" size="30" />,
  },
  {
    name: 'React-native',
    link: 'https://reactnative.dev/',
    icon: <DiReact color="#03d1f6" size="30" />,
  },
  {
    name: 'NextJS',
    link: 'https://nextjs.org/',
    icon: <SiVercel size="30" />,
  },
  {
    name: 'NestJS',
    link: 'https://nestjs.com/',
    icon: <SiNestjs color="#e0234d" size="30" />,
  },
  {
    name: 'Typescript',
    link: 'https://www.typescriptlang.org/',
    icon: <SiTypescript color="#3077c6" size="30" />,
  },
  {
    name: 'Apollo Graphql',
    link: 'https://www.apollographql.com/',
    icon: <SiApollographql size="30" />,
  },
  {
    name: 'RelayJS',
    link: 'https://relay.dev/',
    icon: (
      <Img src={'https://relay.dev/img/relay.svg'} width={30} alt="relay" />
    ),
  },
  {
    name: 'GraphQL',
    link: 'https://graphql.org/',
    icon: <SiGraphql color="#df0298" size="30" />,
  },
  {
    name: 'Hasura',
    link: 'https://hasura.io/',
    icon: <SiHasura color="#1599e5" size="30" />,
  },
  {
    name: 'eosjs',
    link: 'https://developers.eos.io/manuals/eosjs/latest/index',
    icon: <Img src="/eos-logo.svg" width={30} alt="eos" />,
  },
  {
    name: 'Ant Design',
    link: 'https://ant.design/',
    icon: <SiAntdesign color="#158cff" size="30" />,
  },
  {
    name: 'Material UI',
    link: 'https://mui.com/',
    icon: <SiMaterialui color="#3399fe" size="30" />,
  },
  {
    name: 'Styled Components',
    link: 'https://styled-components.com/',
    icon: <SiStyledcomponents color="#9f673f" size="30" />,
  },
  {
    name: 'Chakra UI',
    link: 'https://chakra-ui.com/',
    icon: <SiChakraui color="#38b2ab" size="30" />,
  },
  {
    name: 'ThreeJs',
    link: 'https://threejs.org/',
    icon: <SiThreedotjs size="30" />,
    status: 'loading',
  },
];

export const AboutMe = () => {
  return (
    <MotionBox
      animate={{ marginTop: 20 }}
      width={['100%', '100%', '100%', '80%']}
    >
      <MotionText fontStyle="italic" fontSize="xl">
        <span style={{ fontWeight: 'bold' }}>{`Hi, I'm Regis.`}</span>
        {` I'm a software developer and an enthusiast of using tech to solve problems. The list of things I'm incredibly passionate about includes ReactJS, React-native, Typescript, JavaScript, Design
        Pattern, web development, software architecture, and clean code. I also enjoy music, video games and exploring new places.`}
      </MotionText>
      <MotionText fontSize="xl" animate={{ paddingTop: 32 }}>
        Some of the technologies that I have used include but not limited to:
      </MotionText>
      <MotionBox
        animate={{ padding: 32 }}
        width={['100%', '100%', '100%', '80%']}
      >
        <UnorderedList spacing={3} display="flex" flexDirection={'column'}>
          {techList.map((tech) => (
            <MotionListItem
              key={tech.link}
              as="span"
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
    </MotionBox>
  );
};
