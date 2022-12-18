import Header from "../src/components/Header";
import "../src/styles/tailwind.css";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
