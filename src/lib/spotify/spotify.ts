import type {
  SimplifiedTrack,
  SpotifyError,
  SpotifyNowPlaying,
  SpotifyTokenResponse,
  SpotifyTrack,
  TopTracksParams,
} from './types';

class SpotifyAPI {
  private static instance: SpotifyAPI;
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly refreshToken: string;
  private readonly baseUrl = 'https://api.spotify.com/v1';
  private readonly tokenEndpoint = 'https://accounts.spotify.com/api/token';
  private isInitialized = false;

  private constructor() {
    this.clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID || '';
    this.clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET || '';
    this.refreshToken = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN || '';

    this.isInitialized = Boolean(
      this.clientId && this.clientSecret && this.refreshToken,
    );
  }

  public static getInstance(): SpotifyAPI {
    if (!SpotifyAPI.instance) {
      SpotifyAPI.instance = new SpotifyAPI();
    }
    return SpotifyAPI.instance;
  }

  private checkInitialization() {
    if (!this.isInitialized) {
      throw new Error(
        'Spotify API is not initialized. Missing required credentials.',
      );
    }
  }

  private get basicAuth(): string {
    this.checkInitialization();
    return Buffer.from(`${this.clientId}:${this.clientSecret}`).toString(
      'base64',
    );
  }

  private async getAccessToken(): Promise<string> {
    this.checkInitialization();

    try {
      const response = await fetch(this.tokenEndpoint, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${this.basicAuth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: this.refreshToken,
        }),
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error('Failed to get access token');
      }

      const data = (await response.json()) as SpotifyTokenResponse;
      return data.access_token;
    } catch (error) {
      console.error('Error getting Spotify access token:', error);
      throw error;
    }
  }

  private async fetchFromSpotify<T>(
    endpoint: string,
    accessToken: string,
  ): Promise<T> {
    this.checkInitialization();

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const error = (await response.json()) as SpotifyError;
      throw new Error(error.error.message);
    }

    return response.json() as Promise<T>;
  }

  public async getNowPlaying() {
    try {
      const accessToken = await this.getAccessToken();
      return this.fetchFromSpotify(
        '/me/player/currently-playing',
        accessToken,
      ) as SpotifyNowPlaying;
    } catch (error) {
      console.error('Error getting now playing:', error);
      return null;
    }
  }

  public async getTopTracks({
    limit,
    time_range,
    offset = 0,
    nextList,
  }: TopTracksParams) {
    this.checkInitialization();

    try {
      const accessToken = await this.getAccessToken();
      const endpoint = nextList
        ? nextList.replace(this.baseUrl, '')
        : `/me/top/tracks?limit=${limit}&offset=${offset}&time_range=${time_range}`;

      return this.fetchFromSpotify<{ items: SpotifyTrack[] }>(
        endpoint,
        accessToken,
      );
    } catch (error) {
      console.error('Error getting top tracks:', error);
      throw error;
    }
  }

  public static formatTracks(tracks: SpotifyTrack[]): SimplifiedTrack[] {
    return tracks.map((track) => ({
      artist: track.artists.map((artist) => artist.name).join(', '),
      songUrl: track.external_urls.spotify,
      title: track.name,
    }));
  }
}

// Export a singleton instance
export const spotifyApi = SpotifyAPI.getInstance();

// Export utility functions
export const { formatTracks } = SpotifyAPI;
