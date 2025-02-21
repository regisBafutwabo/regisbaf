'use client';
import { MotionBox } from 'lib/Motion';
import Link from 'next/link';
import type { Post } from 'typings/Blog';

import {
  Box,
  Text,
  useColorMode,
} from '@chakra-ui/react';

export type PostCardProps = {
  post: Post;
};

export const PostCard = ({ post }: PostCardProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      textAlign="left"
      padding={8}
      margin={4}
    >
      <Link href={`/blog/${post?.slug?.current}`} passHref>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          _hover={{ textDecoration: 'underline' }}
        >
          {post?.title}
        </Text>
      </Link>
      <Text color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}>
        {post?.description}
      </Text>
      <Box flexDirection="row" flexWrap="wrap" display="flex">
        {post?.tags?.length &&
          post?.tags.map((tag: { label: string; value: string }) => (
            <MotionBox
              padding={1}
              margin={2}
              key={tag.label}
              borderRadius="lg"
              backgroundColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
              width="fit-content"
              whileHover={{ scale: 1.05, originX: 0 }}
            >
              <Text _hover={{ cursor: 'pointer' }}>{tag.value}</Text>
            </MotionBox>
          ))}
      </Box>
    </Box>
  );
};
