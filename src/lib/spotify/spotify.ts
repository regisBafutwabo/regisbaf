import { getTopTracksParams } from 'lib/spotify/types/spotify';

const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || '';
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET || '';
const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN || '';

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const NOW_PLAYING_ENDPOINT =
  'https://api.spotify.com/v1/me/player/currently-playing';
const TOP_TRACKS_ENDPOINT = 'https://api.spotify.com/v1/me/top/tracks';
const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    cache: 'no-cache',
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getTopTracks = async ({
  limit,
  time_range,
  offset,
  nextList,
}: getTopTracksParams) => {
  const { access_token } = await getAccessToken();
  console.log('Acess Token', access_token);
  return fetch(
    nextList
      ? nextList
      : `${TOP_TRACKS_ENDPOINT}?offset=${offset}&limit=${limit}&time_range=${time_range}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
    }
  );
};

export const getTracks = (items: any[]) => {
  const tracks = items?.map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist?.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
  }));

  return tracks;
};
