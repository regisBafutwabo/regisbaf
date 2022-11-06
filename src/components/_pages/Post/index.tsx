import { Box, Text, useColorMode } from '@chakra-ui/react';
import { RenderHtml } from 'components/common/MdxComponent';
import { format } from 'date-fns';
import { MotionBox } from 'lib/Motion';
import { PostProps } from './Post.types';

export const Post = ({ post, source, readingTime }: PostProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Box marginY="32px" textAlign="center">
        <Text fontSize={'4xl'} fontWeight="bold">
          {post.title}
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom="8"
      >
        <Text fontWeight="bold">{`Last Updated: ${format(
          new Date(post._updatedAt),
          'yyyy-MM-dd'
        )}`}</Text>
        <Text fontWeight="bold">{readingTime}</Text>
      </Box>
      <Box>
        <RenderHtml content={source} />
      </Box>
      <Box marginTop={4} flexDirection="row" flexWrap="wrap" display="flex">
        {post?.tags?.length &&
          post?.tags.map((tag) => (
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
