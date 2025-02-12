import { getClient } from 'lib/sanity';
import type { MetadataRoute } from 'next';

type SanityPost = {
  slug: { current: string };
  _updatedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_URL || 'https://regisbaf.com';
  const client = getClient(false);

  const defaultRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/top-tracks`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];

  if (!client) {
    console.error('Sanity client is not initialized');
    return defaultRoutes;
  }

  try {
    // Fetch all blog posts from Sanity
    const posts = await client.fetch<SanityPost[]>(`
      *[_type == "post"] {
        "slug": slug,
        _updatedAt
      }
    `);

    // Create sitemap entries for blog posts
    const blogUrls = (posts || []).map((post) => ({
      url: `${baseUrl}/blog/${post.slug.current}`,
      lastModified: new Date(post._updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    return [...defaultRoutes, ...blogUrls];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return defaultRoutes;
  }
}
