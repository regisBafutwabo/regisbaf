import { CONTENTS } from 'constants/content';
import { MotionBox } from 'lib/Motion';
import Image from 'next/image';

export const MainHeader = () => {
  const {
    about: { profileAlt, profilePic },
  } = CONTENTS;

  return (
    <MotionBox
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      boxSize={['100px', '200px', '200px', '200px']}
    >
      <Image
        width={150}
        height={150}
        src={profilePic}
        alt={profileAlt}
        placeholder="blur"
        priority
        // fill
        style={{
          borderRadius: 100,
          height: 'auto',
          width: '150px',
        }}
      />
    </MotionBox>
  );
};
