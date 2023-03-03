import { theme } from 'config/theme';
import { Head, Html, Main, NextScript } from 'next/document';

import { ColorModeScript } from '@chakra-ui/react';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet preload prefetch"
          href="https://fonts.googleapis.com/css2?family=Martel&display=swap"
          as="style"
          type="text/css"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
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
