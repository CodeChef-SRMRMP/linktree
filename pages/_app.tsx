import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
