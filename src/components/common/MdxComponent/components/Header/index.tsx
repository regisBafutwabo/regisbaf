import { Text } from '@chakra-ui/react';

export function Header(props: any) {
  return (
    <Text fontSize="xl" as="b" {...props}>
      {props.children}
    </Text>
  );
}
