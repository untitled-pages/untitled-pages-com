import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";
import { IPage } from "../core";

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.statusCode === 404 || pageProps.statusCode === 500) {
    pageProps.meta = {
      description:
        "We’ve distilled everything we know about conversion into ready-to-use templates for landing pages, popups, and sticky bars. Use our drag-and-drop builder to make a beautiful page fast—or start with a blank canvas.",
      image: "/images/open-graph-image.jpg",
      title:
        "Untitled Pages - Choose From Over 100 High-Converting Landing Page Templates",
      url: "https://untitledpages.com",
    };
  }

  const page: IPage = pageProps;

  useEffect(() => {
    mixpanel.init("912151389068ccdc20b1323fa990ca65");

    mixpanel.track("Page View", { slug: page.slug });
  }, [page.slug]);

  return (
    <>
      <Head>
        <title>{page.meta.title}</title>

        <meta content={page.meta.description} name="description" />

        <meta property="og:title" content={page.meta.title} />
        <meta property="og:site_name" content="Untitled Pages" />
        <meta property="og:url" content={page.meta.url} />
        <meta property="og:description" content={page.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={page.meta.image} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
