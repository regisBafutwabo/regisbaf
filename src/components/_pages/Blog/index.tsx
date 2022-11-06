import { Box, Text } from '@chakra-ui/react';
import { PostCard } from 'components/layout/PostCard';
import { MotionBox } from 'lib/Motion';
import { BlogProps } from './Blog.types';

export const Blog = ({ posts }: BlogProps) => {
  return (
    <MotionBox
      animate={{ x: 0 }}
      initial={{ x: '-100vw' }}
      paddingX={[0, 4, 4, 8]}
      paddingY={8}
      height="60vh"
    >
      <Text
        fontWeight="bold"
        fontFamily={'heading'}
        fontSize="4xl"
        textAlign={'center'}
      >
        All Posts
      </Text>

      <Box paddingY={8} textAlign="center">
        {posts.length === 0 && <p>No posts to show</p>}
        {posts.length > 0 &&
          posts.map((post: any) => <PostCard post={post} key={post._id} />)}
      </Box>
    </MotionBox>
  );
};
