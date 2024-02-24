import "../styles/globals.scss";
import "swiper/scss";

import type { AppProps } from "next/app";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="layout">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
export default MyApp;
