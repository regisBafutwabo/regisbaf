'use client';
import { useEffect, useState } from 'react';

import { Spinner } from 'components/Common/Spinner';
import { CONTENTS } from 'constants/content';
import { MotionButton, MotionListItem } from 'lib/Motion';
import { getTopTracks, getTracks } from 'lib/spotify/spotify';
import { Song } from 'lib/spotify/types/spotify';

import { Box, Link, OrderedList, Text } from '@chakra-ui/react';

type TopTracksProps = {
  items: Song[];
  next: string;
};

export const TopTracks = ({ items, next }: TopTracksProps) => {
  const {
    topTracks: { title },
  } = CONTENTS;

  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [nextOffset, setNextOffset] = useState(next);
  const [tracks, setTracks] = useState<Song[]>(items);

  useEffect(() => {
    setTracks(items);
  }, [items]);

  const getNextParams = () => {
    const url = new URL(nextOffset);
    const params = new URLSearchParams(url.search);
    return {
      offset: parseInt(params.get('offset') || '0', 10),
      limit: parseInt(params.get('limit') || '10', 10),
      time_range: params.get('time_range') as
        | 'short_term'
        | 'long_term'
        | 'medium_term',
    };
  };

  const loadMore = async () => {
    setLoading(true);
    setHasError(false);

    try {
      const params = getNextParams();
      const res = await getTopTracks({ nextList: nextOffset, ...params });
      const { items, next } = await res.json();
      const newTracks = getTracks(items);

      setTracks((prevTracks) => [...prevTracks, ...(newTracks || [])]);
      setNextOffset(next);
    } catch {
      setHasError(true);
    } finally {
      setLoading(false);
    }
  };

  // Ensure consistent rendering between server and client
  const isLoading = loading || hasError;

  return (
    <Box padding={[4, 4, 0, 10]}>
      <Text fontFamily="heading" fontSize="2xl">
        {title}
      </Text>
      <Box marginTop={8}>
        {hasError ? (
          <Text>Oops! Something went wrong. Please try again later.</Text>
        ) : (
          <>
            {tracks.length > 0 && (
              <OrderedList spacing={4} display="flex" flexDirection="column">
                {tracks.map((track: Song) => (
                  <MotionListItem
                    key={track.songUrl}
                    transition={{ type: 'spring', stiffness: 300 }}
                    whileHover={{ scale: 1.03, originX: 0 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Link href={track.songUrl} rel="noopener noreferrer">
                      {`${track.title} - ${track.artist}`}
                    </Link>
                  </MotionListItem>
                ))}
              </OrderedList>
            )}
            {nextOffset && (
              <MotionButton
                marginTop={8}
                _hover={{
                  backgroundImage:
                    'linear-gradient(to right, #007BD3, #007311)',
                }}
                bgGradient="linear(to-r, #007BD3, #007311)"
                disabled={isLoading}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={loadMore}
              >
                {isLoading ? <Spinner height={100} width={100} /> : 'Load More'}
              </MotionButton>
            )}
          </>
        )}
      </Box>
    </Box>
  );
};
