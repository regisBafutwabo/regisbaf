import { Box, Text } from '@chakra-ui/react';
import { Spinner } from 'components/Common/Spinner';
import { TopTracks } from 'components/TopTracks';
import { CONTENTS, SEO_CONTENT } from 'constants/content';
import { getTopTracks } from 'lib/spotify/spotify';
import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: `${SEO_CONTENT.name} - Top Tracks`,
    description:
      'Discover what music keeps me coding - my current favorite tracks',
    alternates: {
      canonical: '/top-tracks',
      languages: {
        'en-US': '/top-tracks',
      },
    },
    openGraph: {
      title: `${SEO_CONTENT.name} - Top Tracks`,
      description:
        'Discover what music keeps me coding - my current favorite tracks',
      url: '/top-tracks',
    },
  };
}

export default async function TracksPage() {
  const {
    topTracks: { title },
  } = CONTENTS;
  const data = await getTopTracks({
    limit: 10,
    offset: 0,
    time_range: 'short_term',
  });

  const { items, next } = await data.json();

  const tracks = items.map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist?.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  // Show loading component while data is being fetched
  if (!items) {
    return <Spinner />;
  }

  return (
    <Box padding={[4, 4, 0, 10]}>
      <Text fontFamily="heading" fontSize="2xl">
        {title}
      </Text>
      {tracks?.length > 0 && <TopTracks items={tracks} next={next} />}
    </Box>
  );
}
