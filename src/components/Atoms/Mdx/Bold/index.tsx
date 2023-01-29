import { Box } from '@chakra-ui/react';

export const Bold = (props: any) => {
  console.log('BOLD', props);
  return (
    <Box marginY={5}>
      <b {...props}>{props.children}</b>
    </Box>
  );
};
