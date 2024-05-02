import { Text } from '@chakra-ui/react';

export function Header(props: any) {
  return (
    <Text as="b" {...props}>
      {props.children}
    </Text>
  );
}
