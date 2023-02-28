import Head from 'next/head';
import { useRouter } from 'next/router';

export const Meta = (props: any) => {
  const { ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Regis Bafutwabo – Software Developer',
    description: `Front-end developer, and sometimes Full-stack developer`,
    image: 'https://regisbaf.com/profile.webp',
    type: 'website',
    ...customMeta,
  };
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta
        property="og:url"
        content={`https://regisbaf.com${router.asPath}`}
      />
      <link rel="canonical" href={`https://regisbaf.com${router.asPath}`} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Regis Baf" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@regiswareja" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Head>
  );
};
