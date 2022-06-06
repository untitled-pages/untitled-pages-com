import "../styles/globals.scss";
import Head from "next/head";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  if (pageProps.slug) {
    pageProps.meta = {
      description: pageProps.pages[0].description,
      image: pageProps.image,
      title: pageProps.pages[0].title,
    };
  }

  if (!pageProps.meta) {
    pageProps.meta = {
      description:
        "Start relationships on the right foot with a friendly page that invite people to leave their email.",
      image: "/images/open-graph-image.jpg",
      title: "Untitled Pages - Turn visitors into leads",
    };
  }

  const url = pageProps.slug
    ? `https://untitledpages.com/${pageProps.slug}`
    : `https://untitledpages.com`;

  useEffect(() => {
    mixpanel.init("912151389068ccdc20b1323fa990ca65");

    mixpanel.track("Page View", { slug: pageProps.slug });
  }, [pageProps.slug]);

  return (
    <>
      <Head>
        <title>{pageProps.meta.title}</title>

        <meta content={pageProps.meta.description} name="description" />

        <meta property="og:title" content={pageProps.meta.title} />
        <meta property="og:site_name" content="Untitled Pages" />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={pageProps.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={pageProps.meta.image} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
