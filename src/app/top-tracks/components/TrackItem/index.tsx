import { MotionListItem } from 'lib/Motion';
import type { SimplifiedTrack } from 'lib/spotify/types';

import { Link } from '@chakra-ui/next-js';

type TrackItemProps = {
  track: SimplifiedTrack;
};

export const TrackItem = ({ track }: TrackItemProps) => (
  <MotionListItem
    transition={{ type: 'spring', stiffness: 300 }}
    whileHover={{ scale: 1.03, originX: 0 }}
    whileTap={{ scale: 0.8 }}
  >
    <Link href={track.songUrl} target="_blank" rel="noopener noreferrer">
      {`${track.title} - ${track.artist}`}
    </Link>
  </MotionListItem>
);
