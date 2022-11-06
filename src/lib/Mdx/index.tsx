import { serialize } from 'next-mdx-remote/serialize';
import { Box } from '@chakra-ui/react';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import readingTime from 'reading-time';

export async function mdxToHtml(content: any) {
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'md',
    },
  });

  const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  const tweetIDs = tweetMatches?.map((tweet: any) => tweet.match(/[0-9]+/g)[0]);

  return {
    html: mdxSource,
    tweetIDs: tweetIDs || [],
    wordCount: content.split(/\s+/gu).length,
    readingTime: readingTime(content).text,
  };
}
