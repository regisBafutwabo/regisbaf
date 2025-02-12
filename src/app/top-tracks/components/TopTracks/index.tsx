'use client';
import {
  useEffect,
  useState,
} from 'react';

import { ErrorBoundary } from 'components/Common/ErrorBoundary';
import { Spinner } from 'components/Common/Spinner';
import {
  MotionButton,
  MotionListItem,
} from 'lib/Motion';
import {
  formatTracks,
  spotifyApi,
} from 'lib/spotify/spotify';
import type {
  SimplifiedTrack,
  SpotifyTimeRange,
} from 'lib/spotify/types';

import {
  Box,
  Link,
  OrderedList,
  Text,
} from '@chakra-ui/react';

type TopTracksProps = {
  tracks: SimplifiedTrack[];
};

export const TopTracks = ({ tracks: initialTracks }: TopTracksProps) => {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [offset, setOffset] = useState(10);
  const [tracks, setTracks] = useState<SimplifiedTrack[]>(initialTracks);

  useEffect(() => {
    setTracks(initialTracks);
  }, [initialTracks]);

  const loadMore = async () => {
    setLoading(true);
    setHasError(false);

    try {
      const response = await spotifyApi.getTopTracks({
        limit: 10,
        offset,
        time_range: 'short_term' as SpotifyTimeRange,
      });

      const newTracks = formatTracks(response.items);
      setTracks((prevTracks) => [...prevTracks, ...newTracks]);
      setOffset((prev) => prev + 10);
    } catch (error) {
      setHasError(true);
      console.error('Error loading more tracks:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ErrorBoundary>
      <Box marginTop={8}>
        {hasError ? (
          <Text>Oops! Something went wrong. Please try again later.</Text>
        ) : (
          <>
            {tracks.length > 0 && (
              <OrderedList spacing={4} display="flex" flexDirection="column">
                {tracks.map((track) => (
                  <MotionListItem
                    key={track.songUrl}
                    transition={{ type: 'spring', stiffness: 300 }}
                    whileHover={{ scale: 1.03, originX: 0 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Link
                      href={track.songUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {`${track.title} - ${track.artist}`}
                    </Link>
                  </MotionListItem>
                ))}
              </OrderedList>
            )}
            {tracks.length > 0 && tracks.length < 50 && (
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
