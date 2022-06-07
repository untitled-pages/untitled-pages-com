import axios from "axios";
import { useFormik } from "formik";
import mixpanel from "mixpanel-browser";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as yup from "yup";

export function SqueezePage(props) {
  const [isLoading, setIsLoading] = useState(false);

  const [pageIndex, setPageIndex] = useState(0);

  const formik = useFormik({
    initialValues: props.pages[pageIndex].elements.reduce((dict, x) => {
      dict[x.name] = "";

      return dict;
    }, {}),
    onSubmit: async (values) => {
      setIsLoading(true);

      mixpanel.track("Lead", { slug: props.slug });

      if (props.airtable) {
        try {
          const response = await axios.get(
            `https://rest.smsportal.com/v2/Authentication`,
            {
              auth: {
                password: "TIq4qPiwe2FMHIZlbbINjNc/4OHL/uGt",
                username: "fdfa1e6e-915f-413b-9d0a-701bea46d1cd",
              },
            }
          );

          await axios.post(
            "https://rest.smsportal.com/v2/BulkMessages",
            {
              messages: [
                {
                  content: `Contact ${values.name}, ${values.emailAddress}, ${values.mobileNumber}`,
                  destination: "0766542813",
                },
                props.smsportal
                  ? {
                      content: `Contact ${values.name}, ${values.emailAddress}, ${values.mobileNumber}`,
                      destination: props.smsportal.destination,
                    }
                  : null,
              ].filter((x) => (x ? true : false)),
            },
            {
              headers: {
                authorization: `Bearer ${response.data.token}`,
              },
            }
          );

          await axios.post(
            `https://api.airtable.com/v0/${props.airtable.baseId}/${props.airtable.tableName}`,
            {
              records: [
                {
                  fields: props.pages[pageIndex].elements.reduce(
                    (dict, element) => {
                      dict[element.name] = values[element.name];

                      return dict;
                    },
                    {}
                  ),
                },
              ],
            },
            {
              headers: {
                authorization: `Bearer ${props.airtable.apiKey}`,
              },
            }
          );
        } catch {}
      }

      setPageIndex(pageIndex + 1);

      window.scrollTo(0, 0);
    },
    validationSchema: yup.object(
      props.pages[pageIndex].elements.reduce((dict, x) => {
        if (x.type === "email") {
          dict[x.name] = yup.string().email().required();
        } else {
          dict[x.name] = yup.string().required();
        }

        return dict;
      }, {})
    ),
  });

  return (
    <main>
      <Row className="align-items-center m-0">
        {props.image ? (
          <Col
            className="col d-block d-lg-none d-md-none full-height"
            style={{
              backgroundImage: `url("${props.image}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Col>
        ) : null}
        <Col className="col p-5" md={6} sm={12} xs={12}>
          {props.pages[pageIndex].title ? (
            <h1 className="display-3">{props.pages[pageIndex].title}</h1>
          ) : null}

          {props.pages[pageIndex].description ? (
            <p className="lead">{props.pages[pageIndex].description}</p>
          ) : null}

          <Form onSubmit={formik.handleSubmit}>
            {props.pages[pageIndex].elements.map((element) => (
              <Form.Group className="my-3" key={element.name}>
                <Form.Control
                  autoComplete={element.type}
                  isInvalid={
                    formik.touched[element.name] && formik.errors[element.name]
                  }
                  isValid={
                    formik.touched[element.name] && !formik.errors[element.name]
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

            {pageIndex === props.pages.length - 1 ? null : (
              <Button
                className="my-2 w-100"
                disabled={isLoading}
                size="lg"
                type="submit"
                variant="primary"
              >
                {props.completeText}
              </Button>
            )}
          </Form>
        </Col>

        {props.image ? (
          <Col
            className="col d-none d-lg-block d-md-block full-height"
            style={{
              backgroundImage: `url("${props.image}")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></Col>
        ) : (
          <Col className="bg-primary col d-none d-lg-block d-md-block full-height"></Col>
        )}
      </Row>
    </main>
  );
}
