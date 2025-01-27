import { BlogContent } from 'components/BlogContent';
import { PostSkeleton } from 'components/Common/Skeletons';
import { CONTENTS } from 'constants/content';
import { mdxToHtml } from 'lib/Mdx';
import { getClient } from 'lib/sanity';
import type { Metadata } from 'next';
import type { Post } from 'typings/Blog';

import {
  Box,
  Text,
} from '@chakra-ui/react';

export async function generateMetadata({
  params,
}: any): Promise<Metadata | undefined> {
  const client = getClient(false);

  if (!params.slug) {
    console.error('Missing slug in params');
    return undefined;
  }

  try {
    const posts: Post[] = await client.fetch(
      `*[_type == "post" && slug.current=="${params.slug}"]`,
      {},
      { next: { revalidate: 60 } },
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
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return undefined;
  }
}

export async function generateStaticParams() {
  try {
    const client = getClient(false);

    type SlugResponse = { slug: { current: string } }[];

    // Fetch all blog post slugs
    const slugs = await client.fetch<SlugResponse>(
      `*[_type == "post"] { "slug": slug }`,
      {},
    );

    // Add null check and error handling
    if (!slugs || !Array.isArray(slugs)) {
      console.log('No slugs found or invalid response');
      return [];
    }

    return slugs
      ?.filter((slug) => slug?.slug?.current)
      ?.map((post) => ({
        slug: post.slug.current,
      }));
  } catch (error) {
    // Log error but don't fail build
    console.log('Error generating static params:', error);
    return [];
  }
}

export default async function SlugPage({ params }: any) {
  const client = getClient(false);

  if (!params.slug) {
    throw new Error('Slug is missing');
  }

  const posts = await client.fetch(
    `*[_type == "post" && slug.current=="${params.slug}"]`,
    {},
    { next: { revalidate: 60 } },
  );
  const post = posts[0];

  let html: any = null;
  let readingTime = '0 min read';
  let errorMessage: string | null = null;

  try {
    const mdxResult = await mdxToHtml(post?.content);
    html = mdxResult.html;
    readingTime = mdxResult.readingTime;
    console.log('here', readingTime);
  } catch (error) {
    console.log('here in error');
    console.error('Error converting MDX to HTML:', error);
    html = null;
    readingTime = '0 min read';
    errorMessage =
      'Sorry, there was an error loading this post content. Please try again later.';
  }

  return (
    <Box>
      {post && html ? (
        <BlogContent readingTime={readingTime} post={post} source={html} />
      ) : (
        <>
          {errorMessage ? (
            <Text
              as="p"
              color="red.500"
              my={32}
              className="text-red-500 text-lg text-center my-8"
            >
              {errorMessage}
            </Text>
          ) : (
            <PostSkeleton />
          )}
        </>
      )}
    </Box>
  );
}
