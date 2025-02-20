import { CONTENTS, SEO_CONTENT } from 'constants/content';
import { formatTracks, spotifyApi } from 'lib/spotify/spotify';
import type { SpotifyTimeRange } from 'lib/spotify/types';
import type { Metadata } from 'next';

import { TopTracks } from './components/TopTracks';

export function generateMetadata(): Metadata {
  const title = `${SEO_CONTENT.name} - Top Tracks`;
  const description =
    'Discover what music keeps me coding - my current favorite tracks';

  return {
    title,
    description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_URL}/top-tracks`,
      languages: {
        'en-US': '/top-tracks',
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
      url: `${process.env.NEXT_PUBLIC_URL}/top-tracks`,
      siteName: CONTENTS.about.profileAlt,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
    },
  };
}

export default async function TracksPage() {
  const response = await spotifyApi.getTopTracks({
    limit: 10,
    time_range: 'short_term' as SpotifyTimeRange,
  });

  const tracks = formatTracks(response.items);

  return <TopTracks tracks={tracks} />;
}
