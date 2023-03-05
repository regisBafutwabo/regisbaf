import { Main } from 'components/Main';
import { Meta } from 'components/MetaTags';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <Meta />
      <Main />
    </>
  );
};

export default HomePage;
