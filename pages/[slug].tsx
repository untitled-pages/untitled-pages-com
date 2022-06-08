import axios from "axios";
import { SqueezePage } from "../components";
import { IForm } from "../core";

const Slug = (props: IForm) => {
  return <SqueezePage {...props} />;
};

export default Slug;

export async function getStaticPaths() {
  // return {
  //   paths: [],
  //   fallback: false,
  // };

  const response = await axios.get<Array<string>>(
    `https://untitledpages.com/data/pages/pages.json`
  );

  return {
    paths: response.data.map((x: string) => {
      return {
        params: {
          slug: x,
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: IForm }) {
  const response = await axios.get(
    `https://untitledpages.com/data/pages/${params.slug}.json`
  );

  return {
    props: response.data,
  };
}
