import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const title = pageProps.pages
    ? pageProps.pages.main.title
    : "Untitled Pages - Open Source Lead Pages";

  const description = pageProps.pages ? pageProps.pages.main.description : "";

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta content={description} name="description" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
