import Header from "../src/components/Header";
import { Layout } from "../src/components/Layout";
import "../src/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
