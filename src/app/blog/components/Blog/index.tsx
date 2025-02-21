import { PostCard } from 'app/blog/components/PostCard';
import { CONTENTS } from 'constants/content';
import type { Post } from 'typings/Blog';

import {
  Box,
  Text,
} from '@chakra-ui/react';

type BlogProps = {
  posts: Post[];
};

export const Blog = ({ posts }: BlogProps) => {
  const {
    blog: { title },
  } = CONTENTS;

  return (
    <Box
      paddingX={[0, 4, 4, 8]}
      paddingY={8}
      minHeight="60vh"
      marginBottom="80px"
    >
      <Text
        fontWeight="bold"
        fontFamily={'heading'}
        fontSize="4xl"
        textAlign={'center'}
      >
        {title}
      </Text>
      <Box paddingY={8} textAlign="center">
        {posts.length === 0 && <p>No posts to show</p>}
        {posts.length > 0 &&
          posts.map((post) => <PostCard post={post} key={post._id} />)}
      </Box>
    </Box>
  );
};
