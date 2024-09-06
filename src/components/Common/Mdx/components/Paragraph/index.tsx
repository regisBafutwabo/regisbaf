export const Paragraph = (props: any) => {
  return (
    <p style={{ margin: 16 }} {...props}>
      {props.children}
    </p>
  );
};
