import { Box, Link, Text, useColorMode } from '@chakra-ui/react';
import fetcher from 'lib/fetcher/fetcher';
import { MotionText } from 'lib/Motion';
import { CurrentlySong } from 'lib/spotify/types/spotify';
import { BsSpotify } from 'react-icons/bs';
import useSWR from 'swr';

export default function CurrentlyPlaying() {
  const { colorMode } = useColorMode();
  const { data } = useSWR<CurrentlySong>('/api/currently-playing', fetcher);

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems={['flex-start', 'center']}
      gap={2}
    >
      <BsSpotify color="#1ED760" size={20} />
      <Box
        display="flex"
        flexDirection={['column', 'row']}
        alignItems={['flex-start', 'center']}
        gap={2}
      >
        {data?.songUrl ? (
          <Link
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            fontWeight={'bold'}
          >
            <MotionText
              whileHover={{
                scale: 1.1,
                textShadow: `0px 0px 8px ${
                  colorMode === 'light' ? 'rgb(0,0,0)' : 'rgb(255,255,255)'
                }`,
              }}
              fontSize="md"
              cursor={'pointer'}
            >
              {data.title}
            </MotionText>
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
