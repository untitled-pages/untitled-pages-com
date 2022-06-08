import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";
import { IForm } from "../core";

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.statusCode === 404 || pageProps.statusCode === 500) {
    pageProps.meta = {
      description:
        "Start relationships on the right foot with a friendly page that invite people to leave their email.",
      image: "/images/open-graph-image.jpg",
      title: "Untitled Pages - Turn visitors into leads",
      url: "https://untitledpages.com",
    };
  }

  const form: IForm = pageProps;

  useEffect(() => {
    mixpanel.init("912151389068ccdc20b1323fa990ca65");

    mixpanel.track("Page View", { slug: form.slug });
  }, [form.slug]);

  return (
    <>
      <Head>
        <title>{form.meta.title}</title>

        <meta content={form.meta.description} name="description" />

        <meta property="og:title" content={form.meta.title} />
        <meta property="og:site_name" content="Untitled Pages" />
        <meta property="og:url" content={form.meta.url} />
        <meta property="og:description" content={form.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={form.meta.image} />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
