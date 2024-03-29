import { Blog } from 'components/Blog';
import { Meta } from 'components/MetaTags';
import { getClient } from 'lib/sanity';

import { Text } from '@chakra-ui/react';

function BlogPage({ posts, error }: { posts: any[]; error: any }) {
  return (
    <>
      <Meta title={'Blog - Regis Bafutwabo'} />
      {error && (
        <Text marginTop={200} textAlign="center" color="red.500">
          Oops! {error}
        </Text>
      )}
      {posts?.length > 0 && <Blog posts={posts} />}
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  let posts: any[] | null = null;
  let error: null | any = null;
  try {
    const client = getClient(preview);
    posts = await client.fetch(`*[_type == "post"]`);

    return {
      props: {
        posts,
        error,
      },
    };
  } catch (err: any) {
    error = err;

    return {
      props: {
        posts,
        error: error?.message,
      },
    };
  }
}

export default BlogPage;
