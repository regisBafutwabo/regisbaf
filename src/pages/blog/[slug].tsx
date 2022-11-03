import { SANITY_API_VERSION, SANITY_DATA_SETS, SANITY_ID } from 'constants/env';
import { NextPage } from 'next';
import { createClient } from 'next-sanity';

const BlogSlug: NextPage = (props) => {
  return <></>;
};

export async function getStaticPaths() {
  const client = createClient({
    projectId: SANITY_ID,
    dataset: SANITY_DATA_SETS,
    apiVersion: SANITY_API_VERSION,
    useCdn: false,
  });

  const posts = await client.fetch(`*[_type == "post"]`);

  return {
    paths: posts.map((p: any) => ({ params: { slug: `${p?.slug?.current}` } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const client = createClient({
    projectId: SANITY_ID,
    dataset: SANITY_DATA_SETS,
    apiVersion: SANITY_API_VERSION,
    useCdn: false,
  });

  const posts = await client.fetch(
    `*[_type == "post" && slug.current=="${params.slug}"]`
  );
  return {
    props: {
      post: posts,
    },
  };
}

export default BlogSlug;
