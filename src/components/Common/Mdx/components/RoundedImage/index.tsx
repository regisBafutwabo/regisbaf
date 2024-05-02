import Image from "next/image";

export function RoundedImage(props: any) {
  return (
    <Image
      alt={props.alt}
      width={400}
      height={400}
      priority
      className="rounded-lg"
      {...props}
      style={{
        alignSelf: 'center',
        borderRadius: 5,
        marginRight: 'auto',
        marginLeft: 'auto',
        maxWidth: "100%",
        height: "auto"
      }} />
  );
}
