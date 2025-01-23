'use client';
import {
  Bold,
  Header,
  Header2,
  Link,
  OList,
  RoundedImage,
  UList,
  Pre,
} from 'components/Common/Mdx/components';
import { Paragraph } from 'components/Common/Mdx/components/Paragraph';
// import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Create a loading fallback component
const MDXLoading = () => <div>Loading content...</div>;

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
  ul: UList,
  ol: OList,
  a: Link,
  p: Paragraph,
  b: Bold,
  pre: Pre,
};

export const RenderHtml = ({ content }: { content: any }) => {
  return (
    <Suspense fallback={<MDXLoading />}>
      <MDXRemote {...content} components={MDXComponents} />
    </Suspense>
  );
};
