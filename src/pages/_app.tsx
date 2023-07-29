import { Header } from "src/components/shared/Header";
import "../style/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "src/components/shared/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
