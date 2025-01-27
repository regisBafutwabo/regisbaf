// TODO: GET INTEGRATION Token
import { mdxToHtml } from 'lib/Mdx';
import { getClient } from 'lib/sanity';
import { NextResponse } from 'next/server';

// import { mdxToHtml } from '@/lib/mdx';

const sanityClient = getClient(false);

export async function POST(req: Request) {
  // Verify webhook secret
  const secret = req.headers.get('x-sanity-secret');
  if (secret !== process.env.SANITY_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { _id: postId } = await req.json();

  try {
    // Fetch post from Sanity
    const [post] = await sanityClient.fetch(
      `*[_type == "post" && _id == $postId]{
        title,
        slug,
        content,
        excerpt,
        mainImage,
        publishedAt
      }`,
      { postId },
    );

    // Convert MDX to HTML for Medium
    const { html } = await mdxToHtml(post.content);

    // Create Medium post
    const mediumResponse = await fetch(
      'https://api.medium.com/v1/users/me/posts',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.MEDIUM_INTEGRATION_TOKEN}`,
        },
        body: JSON.stringify({
          title: post.title,
          contentFormat: 'html',
          content: html,
          canonicalUrl: `https://yourdomain.com/blog/${post.slug.current}`,
          tags: post.categories?.map((c: any) => c.title) || [],
          publishStatus: 'draft', // Start with draft for review
        }),
      },
    );

    return NextResponse.json(await mediumResponse.json());
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to cross-post to Medium' },
      { status: 500 },
    );
  }
}
