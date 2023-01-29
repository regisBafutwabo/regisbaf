import { Bold, Header, Link, RoundedImage, UList } from 'components/Atoms/Mdx';
import { Paragraph } from 'components/Atoms/Mdx/Paragraph';
import { MDXRemote } from 'next-mdx-remote';

import { ConsCard } from '../../Atoms/Mdx/ConsCard';
import ProsCard from '../../Atoms/Mdx/ProsCard';

const MDXComponents = {
  img: RoundedImage,
  ConsCard,
  ProsCard,
  h3: Header,
  ul: UList,
  a: Link,
  p: Paragraph,
  b: Bold,
};

export const RenderHtml = ({ content }: { content: any }) => {
  return <MDXRemote {...content} components={MDXComponents} />;
};
