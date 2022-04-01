import { SpinnerIcon } from '@chakra-ui/icons';
import { Box, Link, Spinner, Text } from '@chakra-ui/react';
import fetcher from 'lib/fetcher/fetcher';
import { MotionButton, MotionListItem, MotionOrderedList } from 'lib/Motion';
import { Song, Tracks } from 'lib/spotify/types/spotify';
import { useCallback, useEffect, useState } from 'react';
import useSWR from 'swr';

export const TopTracks = () => {
  const [offset, setOffset] = useState(0);
  const { data, error } = useSWR<Tracks>(`api/top-tracks?offset=${offset || 0}`, fetcher);

  const [loading, setLoading] = useState(false);

  const [tracks, setTracks] = useState<Song[]>([]);

  const onClick = () => {
    setLoading(true);
    setOffset(offset + 10);
  };

  const loadMore = useCallback(() => {
    setTracks([...tracks, ...(data?.tracks || [])]);
    setLoading(false);
  }, [data?.tracks, tracks, setTracks]);

  // TODO: needs a better way to handle this
  useEffect(() => {
    if (data?.tracks) {
      loadMore();
    }
  }, [data?.tracks]);

  return (
    <Box padding={[4, 4, 0, 10]}>
      <Box>
        <Text fontFamily={'heading'} fontSize={'2xl'}>
          My Current Top Tracks List
        </Text>
      </Box>
      <Box marginTop={8}>
        {error ? (
          <Text>Oops! Something went wrong. Please Try again Later</Text>
        ) : (
          <>
            {tracks ? (
              <MotionOrderedList initial={{ x: '-100vw' }} animate={{ x: 0 }} spacing={4} display="flex" flexDirection="column">
                {tracks?.map((track: Song) => (
                  <MotionListItem transition={{ type: 'spring', stiffness: 300 }} key={track.songUrl} whileHover={{ scale: 1.3, originX: 0 }} whileTap={{ scale: 0.99 }}>
                    <Link href={track.songUrl} rel="noopener noreferrer">
                      {`${track.title} - ${track.artist}`}
                    </Link>
                  </MotionListItem>
                ))}
              </MotionOrderedList>
            ) : (
              <SpinnerIcon />
            )}
            {data?.next ? (
              <MotionButton
                marginTop={8}
                _hover={{ backgroundImage: 'linear-gradient(to right, #007BD3, #007311)' }}
                bgGradient="linear(to-r, #007BD3, #007311)"
                disabled={loading}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClick}
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
