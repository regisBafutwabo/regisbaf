import { BlogContent } from 'components/BlogContent';
import { PostSkeleton } from 'components/Common/Skeletons';
import { CONTENTS } from 'constants/content';
import { mdxToHtml } from 'lib/Mdx';
import { getClient } from 'lib/sanity';
import { Metadata } from 'next';
import { Post } from 'typings/Blog';

import { Box } from '@chakra-ui/react';

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const client = getClient(false);
  const posts: Post[] = await client.fetch(
    `*[_type == "post" && slug.current=="${params.slug}"]`,
    {
      revalidate: 60,
    }
  );

  if (!posts[0]) {
    return { title: `${CONTENTS.about.profileAlt} - Blog` };
  }

  const { title, _updatedAt: publishedTime, description } = posts[0];
  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${params.slug}`,
      languages: {
        'en-US': `/blog/${params.slug}`,
      },
    },
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
    `*[_type == "post" && slug.current=="${params.slug}"]`,
    {
      revalidate: 60,
      useCache: true,
    }
  );
  const post = posts[0];
  const { html, readingTime } = await mdxToHtml(post.content);
  // const tweets = await getTweets(tweetIDs);

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
