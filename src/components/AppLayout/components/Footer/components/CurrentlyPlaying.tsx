'use client';
import {
  MotionBox,
  MotionText,
} from 'lib/Motion';
import type { SpotifyNowPlaying } from 'lib/spotify/types';
import Image from 'next/image';
import { BsSpotify } from 'react-icons/bs';

import {
  Box,
  Link,
  Text,
  useColorMode,
} from '@chakra-ui/react';

const ANIMATION_DURATION = 15;

type CurrentlyPlayingProps = {
  currentlyPlaying: SpotifyNowPlaying;
};

export default function CurrentlyPlaying({
  currentlyPlaying,
}: CurrentlyPlayingProps) {
  const { colorMode } = useColorMode();

  const title = currentlyPlaying?.item?.name ?? '';
  const artist =
    currentlyPlaying?.item?.artists
      ?.map((_artist) => _artist?.name)
      ?.join(', ') ?? '';
  const album = currentlyPlaying?.item?.album?.name ?? '';
  const albumImageUrl = currentlyPlaying?.item?.album?.images?.[0]?.url ?? '';
  const songUrl = currentlyPlaying?.item?.external_urls?.spotify ?? '';

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
      gap={2}
      bg="transparent"
    >
      {albumImageUrl && currentlyPlaying?.is_playing ? (
        <MotionBox
          borderRadius="50%"
          overflow="hidden"
          width={'30px'}
          height={'30px'}
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            ease: 'linear',
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <Image
            src={albumImageUrl}
            alt={album || title}
            width={30}
            height={30}
          />
        </MotionBox>
      ) : (
        <BsSpotify color="#1ED760" size={20} />
      )}
      <Box
        display="flex"
        flexDirection={['column', 'row']}
        alignItems={['flex-start', 'center']}
        gap={2}
      >
        {currentlyPlaying?.is_playing ? (
          <Box maxW="250px" overflow="hidden" whiteSpace="nowrap">
            <Link
              href={songUrl}
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

                  duration: ANIMATION_DURATION,
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
                {`${title} – ${artist}`}
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
