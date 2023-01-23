import Image from 'next/image';

export function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}
