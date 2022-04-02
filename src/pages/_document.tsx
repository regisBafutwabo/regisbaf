import { ColorModeScript } from '@chakra-ui/react';
import { theme } from 'config/theme';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  const socialImage = '/profile.jpeg';
  const title = 'Regis Bafutwabo';
  return (
    <Html>
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@400;600;700&family=Nunito:wght@400;500;600;700&display=swap"
          as="font"
        />
        <link
          rel="preload"
          href="api/top-tracks?offset=0"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:creator" content="@regiswareja" />
        <meta name="description" content="My Personal Website" />
        <meta property="og:description" content="My Personal Website" />
        <meta name="twitter:description" content="My Personal Website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialImage} />
        <meta property="og:image" content={socialImage} />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJS, React, Nextjs, react, React-native"
        />
        <meta name="author" content="Regis Bafutwabo" />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`,
          }}
        />
      </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
