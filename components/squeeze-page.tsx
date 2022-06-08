import { useFormik } from "formik";
import mixpanel from "mixpanel-browser";
import Image from "next/image";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import * as yup from "yup";
import { getAccessToken, IForm, IFormPage, sendMessage } from "../core";

export function SqueezePage(props: IForm) {
  const [isLoading, setIsLoading] = useState(false);

  const [pageIndex, setPageIndex] = useState(0);

  const formik = useFormik({
    initialValues: props.pages.reduce(
      (dict: { [key: string]: string }, page: IFormPage) => {
        for (const element of page.elements) {
          dict[element.name] = "";
        }

        return dict;
      },
      {}
    ),
    onSubmit: async (values) => {
      setIsLoading(true);

      mixpanel.track("Lead", { slug: props.slug });

      try {
        await sendMessage(await getAccessToken())(
          `Contact ${values.name}, ${values.emailAddress}, ${values.mobileNumber}`
        );
      } catch {}

      setPageIndex(pageIndex + 1);

      window.scrollTo(0, 0);
    },
    validationSchema: yup.object(
      props.pages.reduce((dict: { [key: string]: any }, page: IFormPage) => {
        for (const element of page.elements) {
          if (element.type === "email") {
            dict[element.name] = yup.string().email().required();
          } else {
            dict[element.name] = yup.string().required();
          }
        }

        return dict;
      }, {})
    ),
  });

  if (pageIndex === props.pages.length) {
    return (
      <div className="bg-light">
        <Container className="py-5">
          <Row className="m-0">
            <Col className="p-5" md={6} sm={12}>
              <h1 className="display-4 fw-bold">Lorem ipsum dolor sit amet</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                feugiat augue lacus, eu iaculis leo congue blandit.
              </p>
            </Col>
            <Col>
              <Image
                alt="Illustration"
                height={795.62948}
                src="/images/undraw_welcome_re_h3d9.svg"
                unoptimized={true}
                width={943.00108}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  return (
    <Row className="align-items-center m-0">
      {props.image ? (
        <Col
          className="d-block d-lg-none d-md-none mt-0 px-0"
          md={{ offset: 2, span: 4 }}
          sm={12}
          xs={12}
        >
          <img
            alt={`Image of ${props.pages[pageIndex].title}`}
            className="img-fluid"
            src={props.image}
          />
        </Col>
      ) : (
        <Col className="bg-primary d-none d-lg-block d-md-block full-height"></Col>
      )}

      <Col className="p-5" md={6} sm={12}>
        {props.pages[pageIndex].title ? (
          <h1 className="display-3">{props.pages[pageIndex].title}</h1>
        ) : null}

        {props.pages[pageIndex].description ? (
          <p className="lead">{props.pages[pageIndex].description}</p>
        ) : null}

        <Form onSubmit={formik.handleSubmit}>
          {props.pages[pageIndex].elements.map((element: any) => (
            <Form.Group className="my-3" key={element.name}>
              <Form.Control
                autoComplete={element.type}
                isInvalid={
                  formik.touched[element.name] && formik.errors[element.name]
                    ? true
                    : false
                }
                isValid={
                  formik.touched[element.name] && !formik.errors[element.name]
                    ? true
                    : false
                }
                name={element.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                placeholder={element.placeholder}
                size="lg"
                type={element.type}
                value={formik.values[element.name]}
              />
            </Form.Group>
          ))}

          <Button
            className="my-2 w-100"
            disabled={isLoading}
            size="lg"
            type="submit"
            variant="primary"
          >
            {props.completeText}
          </Button>
        </Form>
      </Col>

      {props.image ? (
        <Col
          className="d-none d-lg-block d-md-block mt-0 px-0"
          md={{ offset: 2, span: 4 }}
          sm={12}
        >
          <img
            alt={`Image of ${props.pages[pageIndex].title}`}
            className="img-fluid"
            src={props.image}
          />
        </Col>
      ) : (
        <Col className="bg-primary d-none d-lg-block d-md-block full-height"></Col>
      )}
    </Row>
  );
}
