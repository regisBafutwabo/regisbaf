export const Paragraph = (props: any) => {
  return (
    <>
      <p style={{ marginTop: 16, marginBottom: 16 }} {...props}>
        {props.children}
      </p>
    </>
  );
};
