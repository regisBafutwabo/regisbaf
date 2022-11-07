import Head from 'next/head';
import { HeadTitleProps } from './HeadTitle.interface';

export const HeadTitle = ({ title, children }: HeadTitleProps) => {
  return (
    <Head>
      <title>{title}</title>
      {children}
    </Head>
  );
};
