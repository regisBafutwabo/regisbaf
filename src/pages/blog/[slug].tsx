import { PostSkeleton } from 'components/Common/Skeletons';
import { Post } from 'components/Post';
import { mdxToHtml } from 'lib/Mdx';
import { getClient, sanityClient, urlForImage } from 'lib/sanity';
import { getTweets } from 'lib/twitter';
import { NextPage } from 'next';
import Head from 'next/head';

import { Box } from '@chakra-ui/react';

const BlogSlug: NextPage = (props: any) => {
  const { post, content, readingTime } = props;
  return (
    <>
      {post[0]?.title && (
        <Head>
          <title>{`${post[0].title} - Regis Bafutwabo`}</title>
          <meta
            property="article:published_time"
            content={post[0]._updatedAt}
          />
          <meta
            property="og:title"
            content={`${post[0].title} - Regis Bafutwabo`}
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:image:url"
            content={
              post[0].cover
                ? urlForImage(post[0].cover).url()
                : 'https://regisbaf.com/profile.webp'
            }
          />
          <meta property="og:description" content={`${post[0].description}`} />
          <meta
            property="twitter:title"
            content={`${post[0].title} - Regis Bafutwabo`}
          />
          <meta
            name="twitter:image"
            content={
              post[0].cover
                ? urlForImage(post[0].cover).url()
                : 'https://regisbaf.com/profile.webp'
            }
          />
          <meta
            property="twitter:description"
            content={`${post[0].description}`}
          />
        </Head>
      )}
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
  const posts = await sanityClient.fetch(`*[_type == "post"]`);

  return {
    paths: posts.map((p: any) => ({ params: { slug: `${p?.slug?.current}` } })),
    fallback: false,
  };
}

export async function getStaticProps({ params, preview = false }: any) {
  const client = getClient(preview);

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
