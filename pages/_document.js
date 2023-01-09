import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark overflow-x-hidden" prefix="og: https://ogp.me/ns#">
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Tom Bost" />
        <meta
          name="description"
          content="Bienvenue sur mon portfolio. Je suis Tom Bost, développeur web et graphiste passionné. Vous pouvez découvrir les différents projets que j'ai réalisés."
        />
        <meta
          name="keywords"
          content="portfolio, react, nextjs,tailwindcss, bost, tom, tom bost, web developper, développement web, développeur, project web "
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="French" />
        <meta name="author" content="Tom Bost" />
        <meta
          name="description"
          content="Bienvenue sur mon portfolio. Je suis Tom Bost, développeur web et graphiste passionné. Vous pouvez découvrir les différents projets que j'ai réalisés."
        />
        <meta
          property="og:url"
          content="https://nextjs-portfolio-ten-ochre.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tom Bost | PorteFolio" />
        <meta
          property="og:description"
          content="Bienvenue sur mon portfolio. Je suis Tom Bost, développeur web et graphiste passionné. Vous pouvez découvrir les différents projets que j'ai réalisés."
        />
        <meta
          property="og:image"
          content="https://nextjs-portfolio-ten-ochre.vercel.app/_next/static/media/logo-tb.8d19a9ca.svg"
        />
      </Head>

      <body className="relative overflow-x-hidden dark:bg-noblack dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
