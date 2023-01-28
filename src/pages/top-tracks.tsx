import { TopTracks } from 'components/Organisms/TopTracks';
import { NextPage } from 'next';
import Head from 'next/head';

const Tracks: NextPage = () => {
  return (
    <>
      <Head>
        <title>{`Top Tracks - Regis Bafutwabo`}</title>
      </Head>
      <TopTracks />
    </>
  );
};

export default Tracks;
