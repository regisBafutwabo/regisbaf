import {
  Text,
  useColorMode,
} from '@chakra-ui/react';

export function Header(props: any) {
  return (
    <Text as="b" {...props}>
      {props.children}
    </Text>
  );
}

export function Header2(props: any) {
  const { colorMode } = useColorMode();
  return (
    <Text
      as="h2"
      fontSize="22.4px"
      fontWeight="bold"
      paddingBottom={3}
      marginBottom={3}
      borderBottom={`1px solid ${colorMode === 'light' ? '#eee' : '#828282'}`}
      {...props}
    >
      {props.children}
    </Text>
  );
}

export function Header1(props: any) {
  const { colorMode } = useColorMode();
  return (
    <Text
      as="h2"
      fontSize="28px"
      fontWeight="bold"
      paddingBottom={3}
      marginBottom={3}
      borderBottom={`1px solid ${colorMode === 'light' ? '#eee' : '#828282'}`}
      {...props}
    >
      {props.children}
    </Text>
  );
}
