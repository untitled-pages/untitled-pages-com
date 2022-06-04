import axios from "axios";
import { useFormik } from "formik";
import moment from "moment";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as yup from "yup";

export default function Slug(props) {
  const [isLoading, setIsLoading] = useState(false);

  const [status, setStatus] = useState("main");

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);

      if (props.airtable) {
        await axios.post(
          `https://api.airtable.com/v0/${props.airtable.baseId}/${props.airtable.tableName}`,
          {
            records: [
              {
                fields: {
                  "Email Address": values.emailAddress,
                  Timestamp: moment().format("YYYY-MM-DD"),
                },
              },
            ],
          },
          {
            headers: {
              authorization: `Bearer ${props.airtable.apiKey}`,
            },
          }
        );
      }

      setStatus("end");

      window.scrollTo(0, 0);

      if (props.action.url) {
        window.location.href = props.action.url;
      }
    },
    validationSchema: yup.object({
      emailAddress: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    }),
  });

  if (status === "end") {
    return (
      <main>
        <Row className="align-items-center m-0">
          <Col className="col p-5" md={6} sm={12} xs={12}>
            <h1 className="display-2">{props.pages.end.title}</h1>
            <p className="lead">
              <b>{props.pages.end.subtitle}</b>
            </p>
          </Col>
          <Col className="bg-primary col d-none d-lg-block d-md-block full-height"></Col>
        </Row>
      </main>
    );
  }

  return (
    <main>
      <Row className="align-items-center m-0">
        <Col className="col p-5" md={6} sm={12} xs={12}>
          <h1 className="display-2">{props.pages.main.title}</h1>

          <p className="lead">{props.pages.main.description}</p>

          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Control
                autoComplete="email"
                name="emailAddress"
                onChange={formik.handleChange}
                placeholder="Enter your email address"
                size="lg"
                type="email"
                value={formik.values.emailAddress}
              />
            </Form.Group>

            <Button
              className="my-2 w-100"
              disabled={isLoading}
              size="lg"
              type="submit"
              variant="primary"
            >
              {props.action.text}
            </Button>
          </Form>
        </Col>

        {props.pages.main.image ? (
          <Col
            className="col full-height"
            style={{
              backgroundImage: `url("${props.pages.main.image}")`,
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

export async function getStaticPaths() {
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
