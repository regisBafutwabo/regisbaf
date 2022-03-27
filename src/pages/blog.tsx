import { HeadTitle } from 'components/_common/HeadTitle';
import { Blog } from 'components/_pages/Blog';
import { NextPage } from 'next';

const BlogPage: NextPage = () => {
  return (
    <>
      <HeadTitle title="Regis Bafutwabo - Blog" />
      <Blog />
    </>
  );
};

export default BlogPage;
