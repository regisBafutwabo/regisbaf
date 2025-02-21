import { PostSkeleton } from 'components/Common/Skeletons';

import { Box } from '@chakra-ui/react';

export default function BlogLoading() {
  return (
    <Box
      paddingX={[0, 4, 4, 10]}
      paddingY={8}
      minHeight="60vh"
      marginBottom="80px"
    >
      <PostSkeleton />
    </Box>
  );
}
