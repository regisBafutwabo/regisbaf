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
import { TechListType } from 'typings/techList';

import { Img } from '@chakra-ui/react';

const links = [
  {
    value: '/',
    title: 'About Me',
    delay: 0.2,
  },
  {
    value: '/blog',
    title: 'Blog',
    delay: 0.5,
  },
  {
    value: '/top-tracks',
    title: 'Top Tracks',
    delay: 0.8,
  },
];

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
    icon: (
      <Image
        src="/eos-logo.svg"
        width={30}
        height={30}
        alt="eos"
        style={{
          maxWidth: '100%',
          height: 'auto',
          width: '30px',
        }}
      />
    ),
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

export const CONTENTS = {
  navbar: {
    links,
    logo: 'Regis Bafutwabo',
  },
  footer: {
    links,
    linkedin: 'https://www.linkedin.com/in/regis-bafutwabo/',
    github: 'https://github.com/regisBafutwabo',
  },
  about: {
    profilePic: '/profile.webp',
    profileAlt: 'Regis Bafutwabo',
    salutation: `Hi, I'm Regis,`,
    briefDescription:
      ' a Software developer with experience working on complex web applications and blockchain-related projects, I have a strong technical background and a broad range of skills',
    hobbies:
      'I am always eager to take on new challenges and expand my skills in the ever-changing world of technology.I also enjoy music, video games and exploring new places.',
    skills: techList,
  },
  blog: {
    title: 'All Posts',
  },
  topTracks: {
    title: 'My Current Top Tracks List',
  },
};
