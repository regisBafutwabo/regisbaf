import { UnorderedList } from '@chakra-ui/react';

export function UList(props: any) {
  return (
    <UnorderedList spacing={2} my={4} {...props}>
      {props.children}
    </UnorderedList>
  );
}
