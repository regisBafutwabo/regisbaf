import { Blog } from 'components/Organisms/Blog';
import { getClient } from 'lib/sanity';
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

export async function getStaticProps({ preview = false }) {
  const client = getClient(preview);

  const posts = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      posts,
    },
  };
}

export default BlogPage;
