import { ReactNode } from 'react';

import { Metadata } from 'next';

type LayoutProps = {
  children: ReactNode;
};

export function generateMetadata(): Metadata {
  return {
    title: 'Regis Bafutwabo - Top Tracks',
    alternates: {
      canonical: '/top-tracks',
      languages: {
        'en-US': '/top-tracks',
      },
    },
  };
}

export default function Layout({ children }: LayoutProps) {
  return <>{children}</>;
}
