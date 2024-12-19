import { ReactNode } from 'react';

import { SEO_CONTENT } from 'constants/content';
import { Metadata } from 'next';

type LayoutProps = {
  children: ReactNode;
};

export function generateMetadata(): Metadata {
  return {
    title: `${SEO_CONTENT.name} - Top Tracks`,
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
