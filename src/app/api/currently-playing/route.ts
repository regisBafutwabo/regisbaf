import { spotifyApi } from 'lib/spotify/spotify';
import { NextResponse } from 'next/server';

export async function GET() {
  const song = await spotifyApi.getNowPlaying();
  if (!song?.item) {
    return NextResponse.json({ isPlaying: false });
  }

  const isPlaying = song.is_playing ?? false;
  const title = song.item?.name ?? '';
  const artist =
    song.item?.artists?.map((_artist) => _artist?.name)?.join(', ') ?? '';
  const album = song.item?.album?.name ?? '';
  const albumImageUrl = song.item?.album?.images?.[0]?.url ?? '';
  const songUrl = song.item?.external_urls?.spotify ?? '';

  return NextResponse.json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
