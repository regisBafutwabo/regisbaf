import Image from 'next/image';

import { useColorMode } from '@chakra-ui/react';

export function RoundedImage(props: any) {
  return (
    <Image
      alt={props.alt}
      width={400}
      height={400}
      priority
      className="rounded-lg"
      {...props}
      style={{
        alignSelf: 'center',
        borderRadius: 5,
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: '100%',
        height: 'auto',
      }}
    />
  );
}

export function SvgImage(props: any) {
  const { colorMode } = useColorMode();
  return (
    <svg
      className="rounded-lg"
      {...props}
      style={{
        alignSelf: 'center',
        borderRadius: 5,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: '16px',
        marginTop: '16px',
        maxWidth: '100%',
        height: 'auto',
        backgroundColor: colorMode === 'dark' ? 'white' : undefined,
      }}
    />
  );
}
