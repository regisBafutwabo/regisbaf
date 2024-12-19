import { createClient } from 'next-sanity';

import createImageUrlBuilder from '@sanity/image-url';

import { sanityConfig } from './config';

export const sanityClient = createClient(sanityConfig);

export const previewClient = createClient({
  ...sanityConfig,
});

export const getClient = (preview: boolean) =>
  preview ? previewClient : sanityClient;

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source: any) =>
  imageBuilder.image(source).auto('format').fit('max');
