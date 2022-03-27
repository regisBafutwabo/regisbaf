import { Box, Img, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import { DiReact } from 'react-icons/di';
import { SiChakraui, SiStyledcomponents, SiThreedotjs, SiNestjs, SiVercel, SiTypescript, SiApollographql, SiMaterialui, SiGraphql, SiAntdesign, SiHasura } from 'react-icons/si';
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
    icon: <Img src={'https://relay.dev/img/relay.svg'} width={30} />,
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
    <Box marginTop={20} width={['100%', '100%', '100%', '80%']}>
      <Text fontSize={'xl'} fontStyle="italic">
        <span style={{ fontWeight: 'bold' }}>{`Hi, I'm Regis.`}</span>
        {` I'm a software developer and an enthusiast of using tech to solve problems. The list of things I'm incredibly passionate about includes ReactJS, React-native, Typescript, JavaScript, Design
        Pattern, web development, software architecture, and clean code. I also enjoy music, video games and exploring new places.`}
      </Text>
      <Text fontSize="xl" paddingTop={8}>
        Some of the technologies that I have used include but not limited to:
      </Text>
      <Box padding={8} width={['100%', '100%', '100%', '80%']}>
        <UnorderedList spacing={3} display="flex" flexDirection={'column'}>
          {techList.map((tech) => (
            <ListItem key={tech.link} as="a">
              <Link href={tech.link} rel="noopener noreferrer" display="flex" flexDirection={'row'} alignItems="center" gap={4}>
                {tech.icon}
                {tech.status === 'loading' ? (
                  <Box display="flex" flexDirection="row">
                    <Text color="grey">{tech.name}</Text>
                    <Text>: loading...</Text>
                  </Box>
                ) : (
                  <Text>{tech.name}</Text>
                )}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </Box>
  );
};
