import { HeadTitle } from 'components/common/HeadTitle';
import { TopTracks } from 'components/_pages/TopTracks';
import { NextPage } from 'next';

const Tracks: NextPage = () => {
  return (
    <>
      <HeadTitle title="Regis Bafutwabo - Top Tracks" />
      <TopTracks />
    </>
  );
};

export default Tracks;
