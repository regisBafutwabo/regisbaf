import { Box } from '@chakra-ui/react';

export const Bold = (props: any) => {
  return (
    <Box marginY={5}>
      <b {...props}>{props.children}</b>
    </Box>
  );
};
