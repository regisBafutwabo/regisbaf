import { TopTracks } from 'components/Organisms/TopTracks';
import { getTopTracks, getTracks } from 'lib/spotify/spotify';
import { NextPage } from 'next';
import Head from 'next/head';

const Tracks: NextPage<{ items: any[]; next: string }> = ({ items, next }) => {
  const tracks = getTracks(items);

  return (
    <>
      <Head>
        <title>{`Top Tracks - Regis Bafutwabo`}</title>
      </Head>
      <TopTracks items={tracks} next={next} />
    </>
  );
};

export async function getServerSideProps() {
  const res = await getTopTracks({
    limit: 10,
    offset: 0,
    time_range: 'short_term',
  });
  const { items, next } = await res.json();

  return { props: { items, next } };
}

export default Tracks;
