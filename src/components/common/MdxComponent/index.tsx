import { MDXRemote } from 'next-mdx-remote';

import { Header } from './components/Header';
import { Link } from './components/Link';
import { RoundedImage } from './components/RoundedImage';
import { UList } from './components/UnorderedList';
import { ConsCard } from './ConsCard';
import ProsCard from './ProsCard';

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
