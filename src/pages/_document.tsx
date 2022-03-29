import { ColorModeScript } from '@chakra-ui/react';
import { theme } from 'config/theme';
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Martel+Sans:wght@400;600;700&family=Nunito:wght@400;500;600;700&display=swap" as="font" />
      <meta name="description" content="My Personal Website" />
      <meta name="keywords" content="HTML, CSS, JavaScript, NextJS, React, Nextjs, react, React-native" />
      <meta name="author" content="Regis Bafutwabo" />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});`,
        }}
      />

      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
