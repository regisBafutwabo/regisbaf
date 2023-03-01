import { MotionBox, MotionListItem, MotionText } from 'lib/Motion';
import Image from 'next/image';
import { DiReact } from 'react-icons/di';
import {
  SiAmazonaws,
  SiAntdesign,
  SiApollographql,
  SiChakraui,
  SiGraphql,
  SiHasura,
  SiJest,
  SiMaterialui,
  SiNestjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';

import {
  Box,
  Img,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';

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
    name: 'Apollo-Client',
    link: 'https://www.apollographql.com/',
    icon: <SiApollographql size="30" />,
  },
  {
    name: 'Zustand',
    link: 'https://www.npmjs.com/package/zustand',
    icon: (
      <>
        <span style={{ fontSize: 30 }}>🐻</span>
      </>
    ),
  },
  {
    name: 'RelayJS',
    link: 'https://relay.dev/',
    icon: (
      <Img
        src={'https://relay.dev/img/relay.svg'}
        width={30}
        height={30}
        alt="relay"
      />
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
    icon: <Image src="/eos-logo.svg" width={30} height={30} alt="eos" />,
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
    name: 'Tailwind-css',
    link: 'https://tailwindcss.com/',
    icon: <SiTailwindcss color="#37bcf8" size="30" />,
  },
  {
    name: 'Chakra UI',
    link: 'https://chakra-ui.com/',
    icon: <SiChakraui color="#38b2ab" size="30" />,
  },
  {
    name: 'Jest',
    link: 'https://jestjs.io/',
    icon: <SiJest color="#15c213" size="30" />,
  },
  {
    name: 'AWS-CDK',
    link: 'https://aws.amazon.com/cdk/',
    icon: <SiAmazonaws color="#ec7211" size="30" />,
  },
];
const expertiseList = [
  'Developing reusable and scalable React components using atomic design patterns',
  'Writing reliable code using TDD, Jest, and E2E libraries',
  'Optimizing web applications using Chrome Lighthouse best practices',
  'Building complex web applications, including a cohort-based learning platform and a human-accelerating platform',
  'Creating blockchain-related projects, such as a blockchain explorer and wallet mobile application',
  'Improving team productivity by creating a React and react-native boilerplates',
  'Introducing opinionated folder structures to improve the introduction of new features',
  'Using Behavior-Driven Development (BDD) with CucumberJS to improve the flow and function of features between project managers and teams',
];
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
