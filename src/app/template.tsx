import type { ReactNode } from 'react';

import { MotionBox } from 'lib/Motion';

export default function Template({ children }: { children: ReactNode }) {
  return (
    <MotionBox
      animate={{ y: 24 }}
      intial={{ y: 1000 }}
      transition={{ duration: 100.5, type: 'spring', stiffness: 600 }}
      maxWidth={1080}
      mr={[4, 4, 4, 'auto']}
      pr={[0, 0, 0, 8]}
      ml={[4, 4, 4, 'auto']}
      pl={[0, 0, 0, 8]}
    >
      {children}
    </MotionBox>
  );
}
