import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Global
        styles={css`
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Inter;
            background-color: #E4E4E4;;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
