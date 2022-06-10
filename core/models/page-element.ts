export interface IPageElement {
  content: string | null;

  elements: Array<IPageElement>;

  props: any;

  type: "col" | "form" | "h1" | "img" | "p" | "row";
}
