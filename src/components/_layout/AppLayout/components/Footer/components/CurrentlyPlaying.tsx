import useSWR from 'swr';
import { useEffect } from 'react';
import { animate } from 'motion';

import fetcher from 'lib/fetcher';
import { CurrentlySong } from 'lib/types/spotify';
import { Box, Link, Text } from '@chakra-ui/react';
import { BsSpotify } from 'react-icons/bs';

export default function CurrentlyPlaying() {
  const { data } = useSWR<CurrentlySong>('/api/currently-playing', fetcher);

  return (
    <Box display="flex" flexDirection="row" alignItems={['flex-start', 'center']} gap={2}>
      <BsSpotify color="#1ED760" size={20} />
      <Box display="flex" flexDirection={['column', 'row']} alignItems={['flex-start', 'center']} gap={2}>
        {data?.songUrl ? (
          <Link href={data.songUrl} target="_blank" rel="noopener noreferrer" fontWeight={'bold'}>
            {data.title}
          </Link>
        ) : (
          <Text fontFamily={'body'}>Not Playing</Text>
        )}
        <Text display={['none', 'block']}>{' – '}</Text>
        <Text fontFamily={'body'}>{data?.artist ?? 'Spotify'}</Text>
      </Box>
    </Box>
  );
}
