import { MotionBox } from 'lib/Motion';

import { PostSkeleton } from '../components/Skeletons';

export default function BlogPostLoading() {
  return (
    <MotionBox
      animate={{ x: 0 }}
      initial={{ x: '-100vw' }}
      paddingX={[0, 4, 4, 10]}
      paddingY={8}
      minHeight="60vh"
      marginBottom="80px"
    >
      <PostSkeleton />
    </MotionBox>
  );
}
