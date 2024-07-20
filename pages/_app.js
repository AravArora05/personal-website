// src/pages/_app.js
import Layout from '../src/app/components/Layout';
import "../src/app/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
