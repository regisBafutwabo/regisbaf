import { Box } from '@chakra-ui/react';
import { HeadTitle } from 'components/common/HeadTitle';
import { PostSkeleton } from 'components/common/Skeletons/postSkeleton';
import { Post } from 'components/_pages/Post';
import { SANITY_API_VERSION, SANITY_DATA_SETS, SANITY_ID } from 'constants/env';
import { mdxToHtml } from 'lib/Mdx';
import { getTweets } from 'lib/twitter';
import { NextPage } from 'next';

import { createClient } from 'next-sanity';

const BlogSlug: NextPage = (props: any) => {
  const { post, content, readingTime, tweets } = props;

  return (
    <>
      <HeadTitle title={post[0].title} />
      <Box>
        {post[0] ? (
          <Post readingTime={readingTime} post={post[0]} source={content} />
        ) : (
          <PostSkeleton />
        )}
      </Box>
    </>
  );
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

  // const mdxSource = await serialize(posts[0].content);
  const { html, tweetIDs, readingTime } = await mdxToHtml(posts[0].content);

  const tweets = await getTweets(tweetIDs);
  return {
    props: {
      post: posts,
      content: html,
      readingTime,
      tweets,
    },
  };
}

export default BlogSlug;
