import { TopTracks } from 'components/Organisms';
import fetcher from 'lib/fetcher/fetcher';
import { Tracks } from 'lib/spotify/types/spotify';
import { NextPage } from 'next';
import Head from 'next/head';
import useSWR from 'swr';

import { Spinner, Text } from '@chakra-ui/react';

const TracksPage: NextPage<{ items: any[]; next: string }> = () => {
  const { data, error, isLoading } = useSWR<Tracks>(
    `api/top-tracks?offset=0`,
    fetcher
  );

  return (
    <>
      <Head>
        <title>{`Top Tracks - Regis Bafutwabo`}</title>
      </Head>
      {isLoading && (
        <div style={{ textAlign: 'center', marginTop: 200 }}>
          <Spinner />
        </div>
      )}
      {error && (
        <Text marginTop={200} textAlign="center" color="red.500">
          {error?.message}
        </Text>
      )}

      {data && data?.tracks.length > 0 && (
        <TopTracks items={data?.tracks} next={data?.next} />
      )}
    </>
  );
};

export default TracksPage;
