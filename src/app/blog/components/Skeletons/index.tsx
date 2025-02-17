import {
  Box,
  Skeleton,
  Stack,
} from '@chakra-ui/react';

export const PostSkeleton = () => {
  return (
    <Stack>
      <Skeleton
        height="50px"
        width={'60%'}
        alignContent="center"
        marginInline="auto"
        fadeDuration={1}
      />
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        style={{ marginTop: '32px' }}
      >
        <Skeleton height="30px" width={'20%'} fadeDuration={1} />
        <Skeleton height="30px" width={'20%'} fadeDuration={1} />
      </Box>
      <Skeleton
        height="30px"
        width="100%"
        fadeDuration={3}
        style={{ marginTop: '32px' }}
      />
      <Skeleton height="30px" width="100%" fadeDuration={3} />
      <Skeleton height="30px" width="90%" fadeDuration={3} />
      <Skeleton height="30px" width="80%" fadeDuration={3} />
      <Skeleton height="30px" width="100%" fadeDuration={3} />
      <Skeleton height="30px" width="80%" fadeDuration={3} />
    </Stack>
  );
};
