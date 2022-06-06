import "../styles/globals.scss";
import Head from "next/head";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const title = pageProps.pages ? pageProps.pages[0].title : "Untitled Pages";

  const description = pageProps.pages
    ? pageProps.pages[0].description
    : "A powerful landing page builder that helps create high-converting landing pages and drive sales for businesses. Lead generation and opt-in tools integrated.";

  useEffect(() => {
    mixpanel.init("912151389068ccdc20b1323fa990ca65");

    mixpanel.track("Page View");
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta content={description} name="description" />

        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Untitled Pages" />
        <meta
          property="og:url"
          content={`https://untitledpages.com/${pageProps.slug}`}
        />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageProps.image} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
