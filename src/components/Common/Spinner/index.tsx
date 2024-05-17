'use client';

import dynamic from 'next/dynamic';

import * as Loader from '../../../lotties/loading.json';

export type SpinnerProps = {
  height?: number;
  width?: number;
};

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export const Spinner = ({ height, width }: SpinnerProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ height: height || 400, width: width || 400 }}>
        <Lottie animationData={Loader} loop={true} autoplay={true} />
      </div>
    </div>
  );
};
