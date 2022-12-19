import { Html, Head, Main, NextScript } from "next/document";
import Header from "../src/components/Header";

export default function Document() {
  return (
    <Html className="dark overflow-x-hidden">
      <Head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.2.1/css/all.css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="dark:bg-noblack dark:text-white relative overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
