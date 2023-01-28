import { Text } from '@chakra-ui/react';

export function Link(props: any) {
  return (
    <a {...props}>
      <Text as="span" bgGradient="linear(to-r,#007BD3, #007311)">
        {props.children}
      </Text>
    </a>
  );
}
