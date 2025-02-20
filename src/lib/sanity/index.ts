import { createClient } from 'next-sanity';

import createImageUrlBuilder from '@sanity/image-url';

import { sanityConfig } from './config';

const getSanityClient = () => {
  try {
    if (!sanityConfig) {
      throw new Error('Sanity Config is missing!');
    }
    const client = createClient(sanityConfig);
    if (!client) {
      throw new Error('Failed to create Sanity client');
    }
    return client;
  } catch (error) {
    console.error('Error creating Sanity client:', error);
    return null;
  }
};

const previewClient = (() => {
  try {
    if (!sanityConfig) {
      throw new Error('Sanity Config is missing!');
    }
    return createClient({
      ...sanityConfig,
    });
  } catch (error) {
    console.error('Error creating preview client:', error);
    return null;
  }
})();

export const getClient = (preview: boolean) => {
  return preview ? previewClient : getSanityClient();
};

const imageBuilder = (() => {
  try {
    if (!sanityConfig) {
      throw new Error('Sanity Config is missing!');
    }
    return createImageUrlBuilder(sanityConfig);
  } catch (error) {
    console.error('Error creating image builder:', error);
    return null;
  }
})();

export const urlForImage = (source: any) => {
  try {
    if (!imageBuilder) {
      throw new Error('Image builder is not initialized');
    }
    return imageBuilder.image(source).auto('format').fit('max') || '';
  } catch (error) {
    console.error('Error creating image URL:', error);
    return null;
  }
};
