import {
  Box,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import { MDXComponents } from '@mdx-js/react/lib';

// This file is required to use @next/mdx in the `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  // Allows customizing built-in components, e.g. to add styling.
  return {
    
    h3: (props) => (
      <Text as="b" {...props}>
        {props.children}
      </Text>
    ),
    ul: (props) => (
      <UnorderedList spacing={2} my={4} {...props}>
        {props.children}
      </UnorderedList>
    ),
    a: (props) => (
      <a target="_blank" {...props}>
        <Text
          as="span"
          bgGradient="linear(to-r,#007BD3, #007311)"
          rounded="sm"
          padding={0.5}
        >
          {props.children}
        </Text>
      </a>
    ),
    p: (props) => (
      <p style={{ marginTop: 16, marginBottom: 16 }} {...props}>
        {props.children}
      </p>
    ),
    b: (props) => (
      <Box marginY={5}>
        <b {...props}>{props.children}</b>
      </Box>
    ),
    ...components,
  };
}
