import { Text } from '@chakra-ui/react';

export function Link(props: any) {
  return (
    <a target="_blank" {...props}>
      <Text as="span" bgGradient="linear(to-r,#007BD3, #007311)">
        {props.children}
      </Text>
    </a>
  );
}
