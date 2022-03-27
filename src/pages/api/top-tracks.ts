import type { NextApiRequest, NextApiResponse } from 'next';
import { getTopTracks } from 'lib/spotify';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const offset = +req?.query?.offset;

  const response = await getTopTracks({ limit: 10, offset: offset ? offset : 0, time_range: 'short_term' });
  const { items, next } = await response.json();

  const tracks = items.map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist?.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');

  return res.status(200).json({ tracks, next });
}
