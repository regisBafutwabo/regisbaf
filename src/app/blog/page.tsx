import { Blog } from 'app/blog/components/Blog';
import { SEO_CONTENT } from 'constants/content';
import { getClient } from 'lib/sanity';
import type { Metadata } from 'next';
import type { Post } from 'typings/Blog';

export function generateMetadata(): Metadata {
  return {
    title: `${SEO_CONTENT.name} - Blog`,
    description:
      'Read my latest thoughts on web development, and software engineering',
    alternates: {
      canonical: '/blog',
      languages: {
        'en-US': '/blog',
      },
    },
    openGraph: {
      title: `${SEO_CONTENT.name} - Blog`,
      description:
        'Read my latest thoughts on web development, and software engineering',
      url: '/blog',
    },
  };
}

export default async function BlogPage() {
  const client = getClient(false);
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
