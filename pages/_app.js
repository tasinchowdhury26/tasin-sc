import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
