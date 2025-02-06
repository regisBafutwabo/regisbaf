import { SANITY_API_VERSION, SANITY_DATA_SETS, SANITY_ID } from 'constants/env';

export const sanityConfig = {
  projectId: SANITY_ID || '',
  dataset: SANITY_DATA_SETS || '',
  apiVersion: SANITY_API_VERSION || '',
  useCdn: process.env.NODE_ENV !== 'production',
};
