// import '@/styles/globals.css';
// import type { AppProps, } from 'next/app';

//// export default function App({ Component, pageProps }: AppProps) {
////   return <Component {...pageProps} />
//// }
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp;

import "src/styles/globals.css";
import Head from "next/head";
import { useBgColor } from "src/hooks/useBgColor";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";

function MyApp({ Component, pageProps }) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  );
}

export default MyApp;
