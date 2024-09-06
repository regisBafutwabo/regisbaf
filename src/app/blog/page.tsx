import { Blog } from 'components/Blog';
import { getClient } from 'lib/sanity';
import { Metadata } from 'next';
import { Post } from 'typings/Blog';

import { Text } from '@chakra-ui/react';

export function generateMetadata(): Metadata {
  return {
    title: 'Regis Bafutwabo - Blog',
    alternates: {
      canonical: '/blog',
      languages: {
        'en-US': '/blog',
      },
    },
  };
}

export default async function BlogPage() {
  let posts: Post[] | null = [];
  let error: string | null = null;

  try {
    const client = getClient(false);
    posts = await client.fetch(`*[_type == "post"]`);
  } catch (err: any) {
    error = err?.message as string;
  }

  return (
    <>
      {error && (
        <Text marginTop={200} textAlign="center" color="red.500">
          Oops! {error}
        </Text>
      )}
      {posts && posts?.length > 0 ? (
        <Blog posts={posts} />
      ) : (
        <Text marginTop={200} textAlign="center">
          No posts available.
        </Text>
      )}
    </>
  );
}
