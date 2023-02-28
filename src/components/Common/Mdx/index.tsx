import {
  Bold,
  Header,
  Link,
  RoundedImage,
  UList,
} from 'components/Common/Mdx/components';
import { Paragraph } from 'components/Common/Mdx/components/Paragraph';
import { MDXRemote } from 'next-mdx-remote';

const MDXComponents = {
  img: RoundedImage,
  h3: Header,
  ul: UList,
  a: Link,
  p: Paragraph,
  b: Bold,
};

export const RenderHtml = ({ content }: { content: any }) => {
  return <MDXRemote {...content} components={MDXComponents} />;
};
