import { BlogContent } from 'components/BlogContent';
import { PostSkeleton } from 'components/Common/Skeletons';
import { mdxToHtml } from 'lib/Mdx';
import { getClient } from 'lib/sanity';
import { getTweets } from 'lib/twitter';
import { Metadata } from 'next';
import { Post } from 'typings/Blog';

import { Box } from '@chakra-ui/react';

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const client = getClient(false);
  const posts: Post[] = await client.fetch(
    `*[_type == "post" && slug.current=="${params.slug}"]`
  );

  if (!posts[0]) {
    return { title: 'Regis Bafutwabo - Blog' };
  }

  const { title, _updatedAt: publishedTime, description } = posts[0];
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      publishedTime,
      type: 'article',
      url: `${process.env.NEXT_PUBLIC_URL}/blog/${params.slug}`,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
  };
}

export default async function SlugPage({ params }: any) {
  const client = getClient(false);
  const posts = await client.fetch(
    `*[_type == "post" && slug.current=="${params.slug}"]`
  );
  const post = posts[0];
  const { html, tweetIDs, readingTime } = await mdxToHtml(post.content);
  const tweets = await getTweets(tweetIDs);

  return (
    <>
      <Box>
        {post ? (
          <BlogContent readingTime={readingTime} post={post} source={html} />
        ) : (
          <PostSkeleton />
        )}
      </Box>
    </>
  );
}
