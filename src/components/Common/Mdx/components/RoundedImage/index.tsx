import { Flex } from '@chakra-ui/react';
import Image from 'next/image';

export function RoundedImage(props: any) {
  return (
    <Flex
      alignItems="center"
      w="100%"
      flexDirection="column"
      rounded="2xl"
      marginY={8}
      boxShadow="xl"
    >
      <Image
        alt={props.alt}
        width={400}
        height={400}
        priority
        style={{ alignSelf: 'center', borderRadius: 5 }}
        className="rounded-lg"
        {...props}
      />
    </Flex>
  );
}
