import { Blog } from 'app/blog/components/Blog';
import { SEO_CONTENT } from 'constants/content';
import { getClient } from 'lib/sanity';
import type { Metadata } from 'next';
import type { Post } from 'typings/Blog';

export function generateMetadata(): Metadata {
  const description =
    'Read my latest thoughts on web development, and software engineering';
  return {
    title: `${SEO_CONTENT.name} - Blog`,
    description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/blog`,
      languages: {
        'en-US': '/blog',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: `${SEO_CONTENT.name} - Blog`,
      description,
      url: `${process.env.NEXT_PUBLIC_URL}/blog`,
      type: 'website',
      siteName: SEO_CONTENT.name,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SEO_CONTENT.name} - Blog`,
      description,
    },
  };
}

export default async function BlogPage() {
  const client = getClient(false);
  if (!client) {
    throw new Error('Failed to initialize Sanity client');
  }

  const posts = await client?.fetch<Post[]>(
    `*[_type == "post"] | order(_createdAt desc)`,
    {},
    { next: { revalidate: 60 } },
  );

  if (!posts) {
    throw new Error('Failed to fetch blog posts');
  }

  return <Blog posts={posts} />;
}
