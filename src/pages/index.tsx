import { HeadTitle } from 'components/common/HeadTitle';
import { Main } from 'components/_pages/Main';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <>
      <HeadTitle title="Regis Bafutwabo - Home" />
      <Main />
    </>
  );
};

export default HomePage;
