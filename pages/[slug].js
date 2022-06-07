import axios from "axios";
import { SqueezePage } from "../components/squeeze-page";

export default function Slug(props) {
  return <SqueezePage {...props} />;
}

export async function getStaticPaths() {
  // return {
  //   paths: [],
  //   fallback: false,
  // };

  const response = await axios.get(
    `https://untitledpages.com/data/pages/pages.json`
  );

  return {
    paths: response.data.map((x) => {
      return {
        params: {
          slug: x,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(
    `https://untitledpages.com/data/pages/${params.slug}.json`
  );

  return {
    props: response.data,
  };
}
