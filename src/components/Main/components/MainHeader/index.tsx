import { CONTENTS } from 'constants/content';
import { MotionBox } from 'lib/Motion';
import Image from 'next/image';

export const MainHeader = () => {
  const {about:{profileAlt, profilePic}} =CONTENTS;
  return (
    <MotionBox
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      boxSize={['100px', '200px', '200px', '200px']}
    >
      <Image
        width={150}
        height={150}
        style={{ borderRadius: 100 }}
        src={profilePic}
        alt={profileAlt}
        loading="lazy"
      />
    </MotionBox>
  );
};
