import '../styles/globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/layout.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <title>Default title</title>
          </Head>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </>
  )
}

export default MyApp