import type {
  SimplifiedTrack,
  SpotifyNowPlaying,
  SpotifyTrack,
  TopTracksParams,
} from './types';

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1';
const SPOTIFY_TOKEN_URL = 'https://accounts.spotify.com/api/token';

// Load environment variables
const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!;
const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET!;
const refreshToken = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN!;

// Get basic auth token
const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

async function getAccessToken() {
  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    }),
    cache: 'no-store',
  });

  const data = await response.json();
  return data.access_token;
}

async function spotifyFetch<T>(endpoint: string): Promise<T | null> {
  const accessToken = await getAccessToken();

  const response = await fetch(`${SPOTIFY_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: 'no-store',
  });

  // Handle 204 No Content
  if (response.status === 204) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Spotify API error: ${response.statusText}`);
  }

  return response.json();
}

// API functions
export const spotify = {
  async getNowPlaying() {
    return spotifyFetch<SpotifyNowPlaying>('/me/player/currently-playing');
  },

  async getTopTracks({
    limit,
    time_range,
    offset = 0,
    nextList,
  }: TopTracksParams) {
    const endpoint =
      nextList?.replace(SPOTIFY_BASE_URL, '') ??
      `/me/top/tracks?limit=${limit}&offset=${offset}&time_range=${time_range}`;

    return spotifyFetch<{ items: SpotifyTrack[] }>(endpoint);
  },

  formatTracks(tracks: SpotifyTrack[]): SimplifiedTrack[] {
    return tracks.map((track) => ({
      artist: track.artists.map((artist) => artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
    }));
  },
};
