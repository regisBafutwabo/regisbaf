export type getTopTracksParams = {
  limit: number;
  offset: number;
  time_range: 'short_term' | 'long_term' | 'medium_term';
  nextList?: string;
};

export type CurrentlySong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type Song = {
  songUrl: string;
  artist: string;
  title: string;
};

export type Tracks = {
  tracks: Song[];
  next: string;
};
