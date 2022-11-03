import {
  Box,
  Container,
  Text,
  textDecoration,
  useColorMode,
} from '@chakra-ui/react';
import { MotionBox } from 'lib/Motion';
import Link from 'next/link';
import { PostCardProps } from './PostCard.types';

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
      <Link href={`/blog/${post?.slug?.current}`}>
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
          post?.tags.map(
            (tag: { label: string; value: string; _type: string }) => (
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
            )
          )}
      </Box>
    </Box>
  );
};
