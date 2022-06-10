import { IPage } from "../core";

export function SqueezePage(
  slug: string,
  title: string,
  description: string,
  image: string,
  meta: {
    description: string;
    image: string;
    title: string;
    url: string;
  }
): IPage {
  return {
    elements: [
      {
        content: null,
        elements: [
          {
            content: null,
            elements: [
              {
                content: null,
                elements: [],
                props: {
                  alt: `Image of ${title}`,
                  className: "img-fluid",
                  src: image,
                },
                type: "img",
              },
            ],
            props: {
              className: "d-block d-lg-none d-md-none mt-0 px-0",
              md: { offset: 2, span: 4 },
              sm: 12,
            },
            type: "col",
          },
          {
            content: null,
            elements: [
              {
                content: title,
                elements: [],
                props: {
                  className: "display-3",
                },
                type: "h1",
              },
              {
                content: description,
                elements: [],
                props: {
                  className: "lead",
                },
                type: "p",
              },
              {
                content: null,
                elements: [],
                props: {
                  elements: [
                    {
                      autoComplete: "name",
                      name: "name",
                      placeholder: "Enter your name",
                      title: "Name",
                      type: "text",
                    },
                    {
                      autoComplete: "email",
                      name: "emailAddress",
                      placeholder: "Enter your email address",
                      title: "Email Address",
                      type: "email",
                    },
                    {
                      autoComplete: "tel",
                      name: "mobileNumber",
                      placeholder: "Enter your mobile number",
                      title: "Mobile Number",
                      type: "tel",
                    },
                  ],
                  submitButtonText: "Let's build something amazing",
                },
                type: "form",
              },
            ],
            props: {
              className: "p-5",
              md: 6,
              sm: 12,
            },
            type: "col",
          },
          {
            content: null,
            elements: [
              {
                content: null,
                elements: [],
                props: {
                  alt: `Image of ${title}`,
                  className: "img-fluid",
                  src: image,
                },
                type: "img",
              },
            ],
            props: {
              className: "d-none d-lg-block d-md-block mt-0 px-0",
              md: { offset: 2, span: 4 },
              sm: 12,
            },
            type: "col",
          },
        ],
        props: { className: "align-items-center m-0" },
        type: "row",
      },
    ],
    meta,
    slug,
  };
}
