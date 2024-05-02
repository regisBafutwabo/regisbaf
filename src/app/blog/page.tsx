import { Blog } from 'components/Blog';
import { getClient } from 'lib/sanity';
import { Metadata } from 'next';
import { Post } from 'typings/Blog';

import { Text } from '@chakra-ui/react';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata(): Metadata {
  return { title: 'Regis Bafutwabo - Blog' };
}

export default async function BlogPage() {
  let posts: Post[] | null = null;
  let error: string | null = null;

  try {
    const client = getClient(false);
    posts = await client.fetch(`*[_type == "post"]`);
    error = null;
  } catch (err: any) {
    error = err?.message as string;
    posts = null;
  }

  return (
    <>
      {error && (
        <Text marginTop={200} textAlign="center" color="red.500">
          Oops! {error}
        </Text>
      )}
      {posts && error === null && posts?.length > 0 && <Blog posts={posts} />}
    </>
  );
}
