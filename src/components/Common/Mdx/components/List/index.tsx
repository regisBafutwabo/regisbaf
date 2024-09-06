import { OrderedList, UnorderedList } from '@chakra-ui/react';

export function UList(props: any) {
  return (
    <UnorderedList spacing={2} m={4} listStylePos="inside" {...props}>
      {props.children}
    </UnorderedList>
  );
}

export function OList(props: any) {
  return (
    <OrderedList spacing={2} m={4} listStylePos="inside" {...props}>
      {props.children}
    </OrderedList>
  );
}
