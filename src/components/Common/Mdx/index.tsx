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
} from 'components/Common/Mdx/components';
import { Paragraph } from 'components/Common/Mdx/components/Paragraph';
import { Mermaid } from 'mdx-mermaid/lib/Mermaid';
// import { MDXRemote } from 'next-mdx-remote';
import dynamic from 'next/dynamic';

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
  h1: Header1,
  h4: Header,
  ul: UList,
  ol: OList,
  a: Link,
  p: Paragraph,
  b: Bold,
  pre: Pre,
  code: (props: any) => {
    const language = props.className?.replace('language-', '');
    language.includes('mermaid') && console.log('LANGUAGE', props.children);
    if (language.includes('mermaid')) {
      return (
        <Mermaid
          chart={props.children}
          config={{
            output: 'svg',
            mermaid: { securityLevel: 'loose', logLevel: 'error' },
          }}
        />
      );
    }

    return <code {...props} />;
  },
  svg: SvgImage,
};

export const RenderHtml = ({ content }: { content: any }) => {
  return (
    <Suspense fallback={<MDXLoading />}>
      <MDXRemote {...content} components={MDXComponents} />
    </Suspense>
  );
};
