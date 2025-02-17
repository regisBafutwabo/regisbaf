'use client';
import {
  useEffect,
  useState,
} from 'react';

import { ErrorBoundary } from 'components/Common/ErrorBoundary';
import { Spinner } from 'components/Common/Spinner';
import { MotionButton } from 'lib/Motion';
import { spotify } from 'lib/spotify/spotify';
import type {
  SimplifiedTrack,
  SpotifyTimeRange,
} from 'lib/spotify/types';

import {
  Box,
  OrderedList,
} from '@chakra-ui/react';

import { TrackItem } from '../TrackItem';

type TopTracksProps = {
  tracks: SimplifiedTrack[];
};

const TRACKS_PER_PAGE = 10;
const MAX_TRACKS = 50;

export const TopTracks = ({ tracks: initialTracks }: TopTracksProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [offset, setOffset] = useState(10);
  const [tracks, setTracks] = useState<SimplifiedTrack[]>(initialTracks);

  useEffect(() => {
    setTracks(initialTracks);
  }, [initialTracks]);

  const loadMore = async () => {
    if (loading || tracks.length >= MAX_TRACKS) return;
    setLoading(true);
    setError(null);

    try {
      const response = await spotify.getTopTracks({
        limit: TRACKS_PER_PAGE,
        offset,
        time_range: 'short_term' as SpotifyTimeRange,
      });

      if (!response?.items?.length) {
        throw new Error('NO Tracks Found');
      }

      const newTracks = spotify.formatTracks(response.items);
      setTracks((prevTracks) => [...prevTracks, ...newTracks]);
      setOffset((prev) => prev + TRACKS_PER_PAGE);
    } catch (error) {
      console.error('Error loading more tracks:', error);
      setError(
        error instanceof Error ? error : new Error('Failed to load tracks'),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <Box marginY={8}>
        {tracks.length > 0 && (
          <>
            <OrderedList spacing={4} display="flex" flexDirection="column">
              {tracks.map((track) => (
                <TrackItem track={track} key={track?.songUrl} />
              ))}
            </OrderedList>

            {tracks.length < MAX_TRACKS && (
              <MotionButton
                marginTop={8}
                _hover={{
                  backgroundImage:
                    'linear-gradient(to right, #007BD3, #007311)',
                }}
                bgGradient="linear(to-r, #007BD3, #007311)"
                disabled={loading}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={loadMore}
              >
                {loading ? <Spinner height={100} width={100} /> : 'Load More'}
              </MotionButton>
            )}
          </>
        )}
      </Box>
    </ErrorBoundary>
  );
};
