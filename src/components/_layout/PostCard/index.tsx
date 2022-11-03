import { Box, Container, Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { PostCardProps } from './PostCard.types';

export const PostCard = ({ post }: PostCardProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box borderWidth="1px" borderRadius="lg" textAlign="left" padding={8}>
      <Link href={`/blog/${post?.slug?.current}`}>
        <Text fontSize="2xl" fontWeight="bold">
          {post?.title}
        </Text>
      </Link>
      <Text color="gray.400">{post?.description}</Text>
      <Box flexDirection="row" flexWrap="wrap" display="flex">
        {post?.tags.length &&
          post?.tags.map(
            (tag: { label: string; value: string; _type: string }) => (
              <Box
                padding={1}
                margin={2}
                key={tag.label}
                borderRadius="lg"
                backgroundColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
                width="fit-content"
              >
                <Text>{tag.value}</Text>
              </Box>
            )
          )}
      </Box>
    </Box>
  );
};
