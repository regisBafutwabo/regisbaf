import { TopTracks } from 'components/Organisms/TopTracks';
import { getTopTracks, getTracks } from 'lib/spotify/spotify';
import { NextPage } from 'next';
import Head from 'next/head';

const Tracks: NextPage<{ items: any[]; next: string; error: any }> = ({
  items,
  next,
  error,
}) => {
  const tracks = getTracks(items);

  return (
    <>
      <Head>
        <title>{`Top Tracks - Regis Bafutwabo`}</title>
      </Head>
      {error ? (
        <TopTracks items={tracks} next={next} />
      ) : (
        'OOps!! something went wrong. Please Try again later!'
      )}
    </>
  );
};

export async function getServerSideProps() {
  const res = await getTopTracks({
    limit: 10,
    offset: 0,
    time_range: 'short_term',
  });
  try {
    const { items, next } = await res.json();

    return { props: { items, next } };
  } catch (error) {
    return { props: error };
  }
}

export default Tracks;
