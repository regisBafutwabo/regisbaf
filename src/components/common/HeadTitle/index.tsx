import Head from 'next/head';
import { HeadTitleProps } from './HeadTitle.interface';

export const HeadTitle = ({ title }: HeadTitleProps) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
