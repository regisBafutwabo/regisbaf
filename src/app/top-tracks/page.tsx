import { Spinner } from 'components/Common/Spinner';
import { TopTracks } from 'components/TopTracks';
import { getTopTracks } from 'lib/spotify/spotify';

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

  // Show loading component while data is being fetched
  if (!items) {
    return <Spinner />;
  }

  return <>{tracks.length > 0 && <TopTracks items={tracks} next={next} />}</>;
}
