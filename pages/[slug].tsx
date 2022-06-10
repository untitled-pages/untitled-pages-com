import axios from "axios";
import { XPageElement } from "../components";
import { FOUNDER, IForm, IPage, IPageElement } from "../core";

const Slug = (props: IPage) => {
  return (
    <>
      {props.elements.map((pageElement: IPageElement, index: number) => (
        <XPageElement key={index} {...pageElement}></XPageElement>
      ))}
    </>
  );
};

export default Slug;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "founder",
        },
      },
    ],
    fallback: false,
  };

  // const response = await axios.get<Array<string>>(
  //   `https://untitledpages.com/data/pages/pages.json`
  // );

  // return {
  //   paths: response.data.map((x: string) => {
  //     return {
  //       params: {
  //         slug: x,
  //       },
  //     };
  //   }),
  //   fallback: false,
  // };
}

export async function getStaticProps({ params }: { params: IForm }) {
  return {
    props: FOUNDER,
  };

  // const response = await axios.get(
  //   `https://untitledpages.com/data/pages/${params.slug}.json`
  // );

  // return {
  //   props: response.data,
  // };
}
