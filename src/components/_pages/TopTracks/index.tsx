import { Box, Button, Link, ListItem, OrderedList, Spinner, Text } from '@chakra-ui/react';
import fetcher from 'lib/fetcher';
import { Song, Tracks } from 'lib/types/spotify';
import { useCallback, useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';

export const TopTracks = () => {
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [tracks, setTracks] = useState<Song[]>([]);

  const { data, error } = useSWR<Tracks>(`api/top-tracks?offset=${offset}`, fetcher);

  const onClick = () => {
    setLoading(true);
    setOffset(offset + 10);
  };

  const loadMore = useCallback(() => {
    if (data?.tracks) {
      setTracks([...tracks, ...data?.tracks]);
    }
  }, [tracks, setTracks, data?.tracks]);

  useEffect(() => {
    if (data?.tracks) {
      setLoading(false);
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
            <OrderedList spacing={4} display="flex" flexDirection="column">
              {tracks.map((track: Song) => (
                <ListItem key={track.songUrl}>
                  <Link href={track.songUrl} rel="noopener noreferrer">
                    {`${track.title} - ${track.artist}`}
                  </Link>
                </ListItem>
              ))}
            </OrderedList>
            {data?.next ? (
              <Button marginTop={8} disabled={loading} bgGradient="linear(to-r,#007BD3, #007311)" _hover={{ backgroundColor: '#007311' }} onClick={onClick}>
                {loading ? <Spinner /> : 'Load More'}
              </Button>
            ) : undefined}
          </>
        )}
      </Box>
    </Box>
  );
};
