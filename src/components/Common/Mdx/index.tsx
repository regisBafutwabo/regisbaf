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
import { MDXRemote } from 'next-mdx-remote';

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
  return <MDXRemote {...content} components={MDXComponents} />;
};
