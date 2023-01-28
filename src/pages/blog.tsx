import { Blog } from 'components/Organisms/Blog';
import { SANITY_API_VERSION, SANITY_DATA_SETS, SANITY_ID } from 'constants/env';
import { createClient } from 'next-sanity';
import Head from 'next/head';

function BlogPage({ posts }: { posts: any[] }) {
  return (
    <>
      <Head>
        <title>{`Blog - Regis Bafutwabo`}</title>
      </Head>
      <Blog posts={posts} />
    </>
  );
}

export async function getStaticProps() {
  const client = createClient({
    projectId: SANITY_ID,
    dataset: SANITY_DATA_SETS,
    apiVersion: SANITY_API_VERSION,
    useCdn: false,
  });

  const posts = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      posts,
    },
  };
}

export default BlogPage;
