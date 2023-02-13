import { TopTracks } from 'components/Organisms';
import fetcher from 'lib/fetcher/fetcher';
import { Tracks } from 'lib/spotify/types/spotify';
import { NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';

const TracksPage: NextPage<{ items: any[]; next: string }> = () => {
  const { data } = useSWR<Tracks>(`api/top-tracks?offset=0`, fetcher);

  return (
    <>
      <Head>
        <title>{`Top Tracks - Regis Bafutwabo`}</title>
      </Head>
      {data && data?.tracks.length > 0 && (
        <TopTracks items={data?.tracks} next={data?.next} />
      )}
    </>
  );
};

export default TracksPage;
