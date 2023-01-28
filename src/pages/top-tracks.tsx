import { HeadTitle } from 'components/Atoms/HeadTitle';
import { TopTracks } from 'components/Organisms/TopTracks';
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
