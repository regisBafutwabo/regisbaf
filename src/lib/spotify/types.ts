export type SpotifyTimeRange = 'short_term' | 'medium_term' | 'long_term';

export interface SpotifyArtist {
  name: string;
  external_urls: {
    spotify: string;
  };
}

export interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  external_urls: {
    spotify: string;
  };
}

export interface TopTracksParams {
  limit: number;
  time_range: SpotifyTimeRange;
  offset?: number;
  nextList?: string;
}

export interface SimplifiedTrack {
  artist: string;
  songUrl: string;
  title: string;
}

export interface SpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface SpotifyError {
  error: {
    status: number;
    message: string;
  };
}
