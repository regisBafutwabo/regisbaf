import { PostSkeleton } from 'components/Common/Skeletons';
import { MotionBox } from 'lib/Motion';

export default function BlogLoading() {
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
