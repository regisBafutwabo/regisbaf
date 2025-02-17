import { RenderHtml } from 'components/Common/Mdx';
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
}: {
  params: { slug: string };
}): Promise<Metadata | null> {
  const { slug } = params;

  if (!slug) {
    console.error('Missing slug in params');
    return null;
  }

  try {
    const client = getClient(false);
    const posts: Post[] | undefined = await client?.fetch(
      `*[_type == "post" && slug.current=="${slug}"]`,
      {},
      { next: { revalidate: 60 } },
    );

    if (!posts || posts.length === 0) {
      return { title: `${CONTENTS.about.profileAlt} - Blog` };
    }

    const { title, _updatedAt: publishedTime, description } = posts[0];
    return {
      title,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_URL}/blog/${slug}`,
        languages: {
          'en-US': `/blog/${slug}`,
        },
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
        },
      },
      openGraph: {
        title,
        description,
        publishedTime,
        type: 'article',
        url: `${process.env.NEXT_PUBLIC_URL}/blog/${slug}`,
        siteName: CONTENTS.about.profileAlt,
      },
      twitter: {
        title,
        description,
        card: 'summary_large_image',
      },
    };
  } catch (error) {
    console.error('Error fetching metadata:', error);
    return null;
  }
}

export async function generateStaticParams() {
  try {
    const client = getClient(false);

    if (!client) {
      throw new Error('Sanity client is not initialized');
    }

    type SlugResponse = { slug: { current: string } }[];

    const slugs = await client.fetch<SlugResponse>(
      `*[_type == "post"] { "slug": slug }`,
      {},
    );

    if (!slugs || !Array.isArray(slugs)) {
      console.log('No slugs found or invalid response');
      return [];
    }

    return slugs
      .filter((slug) => slug?.slug?.current)
      .map((post) => ({
        slug: post.slug.current,
      }));
  } catch (error) {
    console.log('Error generating static params:', error);
    return [];
  }
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const client = getClient(false);

  if (!client) {
    throw new Error('Sanity client is not initialized');
  }

  if (!params.slug) {
    throw new Error('Slug is missing');
  }

  const posts = await client.fetch<Post[]>(
    `*[_type == "post" && slug.current=="${params.slug}"]`,
    {},
    { next: { revalidate: 60 } },
  );

  if (!posts || posts.length === 0) {
    throw new Error('Post not found');
  }

  const post = posts[0];

  if (!post.content) {
    throw new Error('Post content is missing');
  }

  try {
    const mdxResult = await mdxToHtml(post.content);
    if (!mdxResult || !mdxResult.html) {
      throw new Error('Failed to process post content');
    }

    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        width="100%"
        marginY={8}
      >
        <Text
          as="h1"
          fontSize={['3xl', '4xl']}
          marginBottom={4}
          fontWeight="bold"
        >
          {post.title}
        </Text>
        <RenderHtml content={mdxResult.html} />
      </Box>
    );
  } catch (error) {
    console.error('Error processing MDX content:', error);
    throw new Error('Failed to process blog post content');
  }
}
