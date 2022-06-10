import { IPageElement } from "./page-element";

export interface IPage {
  elements: Array<IPageElement>;

  meta: {
    description: string;

    image: string;

    title: string;

    url: string;
  };

  slug: string;
}
