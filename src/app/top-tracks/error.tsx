'use client'; // Error components must be Client Components

import { useEffect } from 'react';

import {
  Box,
  Button,
  Text,
} from '@chakra-ui/react';

export default function TopTracksError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      suppressHydrationWarning
      padding={[4, 4, 0, 10]}
    >
      <h2>Something went wrong!</h2>
      <Text color="red">{`${error.message}`}</Text>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </Box>
  );
}
