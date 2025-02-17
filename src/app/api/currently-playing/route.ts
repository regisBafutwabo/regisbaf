import { spotify } from 'lib/spotify/spotify';
import { NextResponse } from 'next/server';

// Types
interface SpotifyTrack {
  name: string;
  artists: Array<{ name: string }>;
  album: {
    name: string;
    images: Array<{ url: string }>;
  };
  external_urls: {
    spotify: string;
  };
}

interface NowPlayingResponse {
  is_playing: boolean;
  item: SpotifyTrack | null;
}

interface ApiResponse {
  isPlaying: boolean;
  album?: string;
  albumImageUrl?: string;
  artist?: string;
  songUrl?: string;
  title?: string;
}

export async function GET() {
  try {
    const response = await spotify.getNowPlaying();
    const song = response as NowPlayingResponse;

    if (!song?.item) {
      return NextResponse.json<ApiResponse>({ isPlaying: false });
    }

    const {
      is_playing,
      item: {
        name: title,
        artists,
        album: { name: albumName, images },
        external_urls: { spotify: songUrl },
      },
    } = song;

    return NextResponse.json<ApiResponse>({
      isPlaying: is_playing ?? false,
      title,
      artist: artists?.map((artist) => artist.name).join(', '),
      album: albumName,
      albumImageUrl: images?.[0]?.url,
      songUrl,
    });
  } catch (error) {
    console.error('Error fetching now playing:', error);
    return NextResponse.json<ApiResponse>(
      { isPlaying: false },
      { status: 500 },
    );
  }
}
