import { TopTracks } from 'components/TopTracks';
import { getTopTracks } from 'lib/spotify/spotify';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: 'Regis Bafutwabo - Top Tracks',
    alternates: {
      canonical: '/top-tracks',
      languages: {
        'en-US': '/top-tracks',
      },
    },
  };
}

export default async function TracksPage() {
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

  return (
    <>
      {tracks && tracks.length > 0 && <TopTracks items={tracks} next={next} />}
    </>
  );
}
