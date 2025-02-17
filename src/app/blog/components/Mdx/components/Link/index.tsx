import { Text } from '@chakra-ui/react';

export function Link(props: any) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      <Text
        as="span"
        bgGradient="linear(to-r,#007BD3, #007311)"
        rounded="sm"
        padding={0.5}
      >
        {props.children}
      </Text>
    </a>
  );
}
