'use client';
import fetcher from 'lib/fetcher/fetcher';
import { MotionText } from 'lib/Motion';
// import { CurrentlySong } from 'lib/spotify/types';
import { BsSpotify } from 'react-icons/bs';
import useSWR from 'swr';

import { Box, Link, Text, useColorMode } from '@chakra-ui/react';

export default function CurrentlyPlaying() {
  const { colorMode } = useColorMode();
  const { data } = useSWR<{
    album: string;
    albumImageUrl: string;
    artist: string;
    isPlaying: boolean;
    songUrl: string;
    title: string;
  }>('/api/currently-playing', fetcher, {
    errorRetryCount: 2,
    refreshInterval: 60000,
    refreshWhenHidden: true,
  });

  const animationDuration = 15;

  return (
    <Box display="flex" flexDirection="row" alignItems="flex-start" gap={2}>
      <BsSpotify color="#1ED760" size={20} />
      <Box
        display="flex"
        flexDirection={['column', 'row']}
        alignItems={['flex-start', 'center']}
        gap={2}
      >
        {data?.songUrl ? (
          <Box maxW="250px" overflow="hidden" whiteSpace="nowrap">
            <Link
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              fontWeight={'bold'}
            >
              <MotionText
                display="inline-block"
                initial={{ x: '0%' }}
                animate={{ x: ['0%', '-100%'] }}
                transition={{
                  ease: 'linear',

                  duration: animationDuration,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                whileHover={{
                  textShadow: `0px 0px 8px ${
                    colorMode === 'light' ? 'rgb(0,0,0)' : 'rgb(255,255,255)'
                  }`,
                }}
                fontSize="md"
                cursor={'pointer'}
              >
                {`${data.title} – ${data?.artist}`}
              </MotionText>
            </Link>
          </Box>
        ) : (
          <Text fontFamily={'body'} whiteSpace="nowrap">
            Not Playing - Spotify
          </Text>
        )}
      </Box>
    </Box>
  );
}
