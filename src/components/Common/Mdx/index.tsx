'use client';
import './styles.css';

import { Suspense } from 'react';

import { Paragraph } from 'components/Common/Mdx/components/Paragraph';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import dynamic from 'next/dynamic';

import { Spinner } from '../Spinner';
import { Bold } from './components/Bold';
import { Pre } from './components/Code';
import {
  Header,
  Header1,
  Header2,
} from './components/Header';
import { Link } from './components/Link';
import {
  OList,
  UList,
} from './components/List';
import {
  RoundedImage,
  SvgImage,
} from './components/RoundedImage';

// Create a loading fallback component
const MDXLoading = () => <Spinner />;

// Dynamically import MDXRemote
const MDXRemote = dynamic<any>(
  () => import('next-mdx-remote').then((mod) => mod.MDXRemote),
  {
    ssr: false,
    loading: () => <MDXLoading />,
  },
);

const MDXComponents = {
  img: RoundedImage,
  h3: Header,
  h2: Header2,
  h1: Header1,
  h4: Header,
  ul: UList,
  ol: OList,
  a: Link,
  p: Paragraph,
  b: Bold,
  pre: Pre,
  code: (props: any) => {
    return <code {...props} />;
  },
  svg: SvgImage,
};

interface RenderHtmlProps {
  content: MDXRemoteSerializeResult;
}

export const RenderHtml = ({ content }: RenderHtmlProps) => {
  if (!content) {
    return <div>No content available</div>;
  }

  return (
    <Suspense fallback={<MDXLoading />}>
      <MDXRemote {...content} components={MDXComponents} />
    </Suspense>
  );
};
