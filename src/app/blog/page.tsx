import { Blog } from 'app/blog/components/Blog';
import { SEO_CONTENT } from 'constants/content';
import { MotionBox } from 'lib/Motion';
import { getClient } from 'lib/sanity';
import type { Metadata } from 'next';
import type { Post } from 'typings/Blog';

import { Text } from '@chakra-ui/react';

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
  let posts: Post[] | null = [];
  let error: string | null = null;

  try {
    const client = getClient(false);
    if (!client) throw new Error('Sanity Client is missing');

    posts = await client.fetch(
      `*[_type == "post"]`,
      {},
      { next: { revalidate: 60 } },
    );
  } catch (err: any) {
    error = err?.message as string;
  }

  if (error) {
    return (
      <MotionBox
        animate={{ x: 0 }}
        initial={{ x: '-100vw' }}
        paddingX={[0, 4, 4, 10]}
        paddingY={8}
        minHeight="60vh" // Changed height to minHeight to prevent footer overlap
        marginBottom="80px" // Added margin to ensure space for footer
      >
        <Text marginTop={200} textAlign="center" color="red.500">
          Oops! {error}
        </Text>
      </MotionBox>
    );
  }

  if (posts && posts.length > 0) {
    return <Blog posts={posts} />;
  }

  return (
    <MotionBox
      animate={{ x: 0 }}
      initial={{ x: '-100vw' }}
      paddingX={[0, 4, 4, 10]}
      paddingY={8}
      minHeight="60vh" // Changed height to minHeight to prevent footer overlap
      marginBottom="80px" // Added margin to ensure space for footer
    >
      <Text marginTop={200} textAlign="center">
        No posts available.
      </Text>
    </MotionBox>
  );
}
