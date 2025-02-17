'use client';
import { Suspense } from 'react';

import {
  Bold,
  Header,
  Header1,
  Header2,
  Link,
  OList,
  Pre,
  RoundedImage,
  SvgImage,
  UList,
} from 'app/blog/components/Mdx/components';
import { Paragraph } from 'app/blog/components/Mdx/components/Paragraph';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import dynamic from 'next/dynamic';

import { Spinner } from '../../../../components/Common/Spinner';

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
