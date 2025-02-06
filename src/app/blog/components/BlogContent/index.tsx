'use client';
import { RenderHtml } from 'components/Common/Mdx';
import { format } from 'date-fns';
import { urlForImage } from 'lib/sanity';
import Image from 'next/image';
import type { Post } from 'typings/Blog';

import {
  Box,
  Text,
  useColorMode,
} from '@chakra-ui/react';

type PostProps = {
  post: Post;
  source: any;
  readingTime: string;
};

export const BlogContent = ({ post, source, readingTime }: PostProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box mb={32}>
      <Box my={16} textAlign="center">
        <Text fontSize={'4xl'} fontWeight="bold">
          {post.title}
        </Text>
      </Box>
      {post.cover && (
        <Box
          display="flex"
          justifyContent="center"
          marginBottom={16}
          rounded="md"
        >
          <Image
            src={urlForImage(post.cover)?.url() || ''}
            alt="cover"
            width={500}
            height={500}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </Box>
      )}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginBottom="8"
      >
        <Text fontWeight="bold">{`Last Updated: ${format(
          new Date(post._updatedAt),
          'yyyy-MM-dd',
        )}`}</Text>
        <Text fontWeight="bold">{readingTime}</Text>
      </Box>
      <Box>
        <RenderHtml content={source} />
      </Box>
      <Box marginTop={4} flexDirection="row" flexWrap="wrap" display="flex">
        {post?.tags?.length &&
          post?.tags.map((tag) => (
            <Box
              px={4}
              py={2}
              margin={2}
              key={tag.label}
              borderRadius="lg"
              backgroundColor={colorMode === 'dark' ? 'gray.700' : 'gray.200'}
              width="fit-content"
              // whileHover={{ scale: 1.05, originX: 0 }}
            >
              <Text>{tag.value}</Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};
