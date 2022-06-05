import "../styles/globals.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const title = pageProps.pages
    ? pageProps.pages[0].title
    : "Untitled Pages - Open Source Website &amp; Landing Page Software Small Businesses";

  const description = pageProps.pages
    ? pageProps.pages[0].description
    : "A powerful landing page builder that helps create high-converting landing pages and drive sales for businesses. Lead generation and opt-in tools integrated.";

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
