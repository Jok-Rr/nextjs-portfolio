import { Html, Head, Main, NextScript } from "next/document";
import Header from "../src/components/Header";

export default function Document() {
  return (
    <Html className="dark">
      <Head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.2.1/css/all.css"
        />
      </Head>
      <body className="dark:bg-noblack dark:text-white relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
