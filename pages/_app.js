import { Fragment } from "react";
import Preloader from "../src/layout/Preloader";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      {/* Preloader */}
      <Preloader />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
