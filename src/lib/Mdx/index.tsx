import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

export async function mdxToHtml(content: any) {
  if (!content) {
    return {
      html: null,
      tweetIDs: [],
      readingTime: '0 min read',
    };
  }

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        [rehypePrism, { ignoreMissing: true }],
        // [
        // rehypeAutolinkHeadings,
        // {
        //   properties: {
        //     className: ['anchor'],
        //   },
        // },
        // ],
      ],
      format: 'md',
    },
  });

  // const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  // const tweetIDs = tweetMatches?.map((tweet: any) => tweet.match(/[0-9]+/g)[0]);

  return {
    html: mdxSource,
    // tweetIDs: tweetIDs || [],
    // wordCount: content.split(/\s+/gu).length,
    readingTime: readingTime(content).text,
  };
}
