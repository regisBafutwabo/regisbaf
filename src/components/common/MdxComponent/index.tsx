import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import { ConsCard } from './ConsCard';
import ProsCard from './ProsCard';

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

const MDXComponents = {
  Image: RoundedImage,
  ConsCard,
  ProsCard,
};

export const RenderHtml = ({ content }: { content: any }) => {
  return <MDXRemote {...content} components={MDXComponents} />;
};
