import { Header, Link, RoundedImage, UList } from 'components/Atoms/Mdx';
import { MDXRemote } from 'next-mdx-remote';

import { ConsCard } from '../../Atoms/Mdx/ConsCard';
import ProsCard from '../../Atoms/Mdx/ProsCard';

const MDXComponents = {
  Image: RoundedImage,
  ConsCard,
  ProsCard,
  h3: Header,
  ul: UList,
  a: Link,
};

export const RenderHtml = ({ content }: { content: any }) => {
  return <MDXRemote {...content} components={MDXComponents} />;
};
