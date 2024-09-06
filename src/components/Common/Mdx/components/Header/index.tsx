import { Text } from '@chakra-ui/react';

export function Header(props: any) {
  return (
    <Text as="b" {...props}>
      {props.children}
    </Text>
  );
}

export function Header2(props: any) {
  return (
    <Text as="h2" fontSize="22.4px" fontWeight="bold" {...props}>
      {props.children}
    </Text>
  );
}
