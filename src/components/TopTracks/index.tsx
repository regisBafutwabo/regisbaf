import { useState } from 'react';

import { CONTENTS } from 'constants/content';
import {
  MotionButton,
  MotionListItem,
  MotionOrderedList,
} from 'lib/Motion';
import {
  getTopTracks,
  getTracks,
} from 'lib/spotify/spotify';
import { Song } from 'lib/spotify/types/spotify';

import {
  Box,
  Link,
  Skeleton,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';

import { TopTracksProps } from './TopTracks.types';

export const TopTracks = (props: TopTracksProps) => {
  const { items, next } = props;
  const {topTracks:{title}} = CONTENTS

  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [nextOffset, setNextOffset] = useState(next);
  const [tracks, setTracks] = useState<Song[]>(items);

  const getNextParams = () => {
    const url = new URL(nextOffset);
    const params = new URLSearchParams(url.href);
    const offset = parseInt(params.get('offset') as string, 10);
    const limit = parseInt(params.get('limit') as string, 10);
    const time_range = params.get('time_range') as
      | 'short_term'
      | 'long_term'
      | 'medium_term';

    return {
      offset,
      limit,
      time_range,
    };
  };

  const loadMore = async () => {
    try {
      setLoading(true);
      setHasError(false);

      const params = getNextParams();
      const res = await getTopTracks({ nextList: nextOffset, ...params });
      const { items, next } = (await res.json()) as any;
      const newTracks = getTracks(items);

      setTracks([...tracks, ...(newTracks || [])]);
      setNextOffset(next);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setHasError(true);
    }
  };

  return (
    <Box padding={[4, 4, 0, 10]}>
      <Box>
        <Text fontFamily={'heading'} fontSize={'2xl'}>
          {title}
        </Text>
      </Box>
      <Box marginTop={8}>
        {hasError ? (
          <Text>Oops! Something went wrong. Please Try again Later</Text>
        ) : (
          <>
            {tracks ? (
              <MotionOrderedList
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                spacing={4}
                display="flex"
                flexDirection="column"
              >
                {tracks?.map((track: Song) => (
                  <MotionListItem
                    transition={{ type: 'spring', stiffness: 300 }}
                    key={track.songUrl}
                    whileHover={{ scale: 1.03, originX: 0 }}
                    whileTap={{ scale: 0.8 }}
                  >
                    <Link href={track.songUrl} rel="noopener noreferrer">
                      {`${track.title} - ${track.artist}`}
                    </Link>
                  </MotionListItem>
                ))}
              </MotionOrderedList>
            ) : (
              <Stack>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />
              </Stack>
            )}
            {nextOffset ? (
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
                {loading ? <Spinner /> : 'Load More'}
              </MotionButton>
            ) : undefined}
          </>
        )}
      </Box>
    </Box>
  );
};
