import { IFormPage } from "./form-page";

export interface IForm {
  completeText: string;

  image: string;

  meta: {
    description: string;

    image: string;

    title: string;

    url: string;
  };

  pages: Array<IFormPage>;

  slug: string;

  template: "squeeze-page";
}
