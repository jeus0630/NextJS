import '../styles/globals.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/layout.css'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </>
  )
}

export default MyApp