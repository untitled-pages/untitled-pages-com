import axios from "axios";
import { useFormik } from "formik";
import moment from "moment";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import * as yup from "yup";

export function SqueezePage() {
  const params = useParams();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);

      await axios.post(
        `https://api.airtable.com/v0/${useQueryResult.data.airtable.baseId}/${useQueryResult.data.airtable.tableName}`,
        {
          records: [
            {
              fields: {
                "Email Address": values.emailAddress,
                Timestamp: moment().format("YYYY-MM-DD"),
                Source: "organic",
              },
            },
          ],
        },
        {
          headers: {
            authorization: `Bearer ${useQueryResult.data.airtable.apiKey}`,
          },
        }
      );

      setStatus("success");
    },
    validationSchema: yup.object({
      emailAddress: yup
        .string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
    }),
  });

  const useQueryResult = useQuery(["page", params.slug], async () => {
    const response = await axios.get(
      `/data/pages/${params.slug || "morning-brew"}.json`
    );

    return response.data;
  });

  const [isLoading, setIsLoading] = useState(false);

  const [status, setStatus] = useState("main");

  if (!useQueryResult.data) {
    return <></>;
  }

  if (status === "success") {
    return (
      <main>
        <Row className="align-items-center m-0">
          <Col className="col p-5" md={6} sm={12} xs={12}>
            <h1 className="display-2">{useQueryResult.data.success.title}</h1>
            <p className="lead">
              <b>{useQueryResult.data.success.subtitle}</b>{" "}
              {moment().format("YYYY-MM-DD")}
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
          <h1 className="display-2">{useQueryResult.data.main.title}</h1>
          {useQueryResult.data.main.subtitle ? (
            <p className="lead">
              <b>{useQueryResult.data.main.subtitle}</b>
            </p>
          ) : null}

          <p className="lead">{useQueryResult.data.main.description}</p>

          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Control
                autoComplete="email"
                name="emailAddress"
                onChange={formik.handleChange}
                placeholder="Enter Your Email Address"
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
              {useQueryResult.data.action.text}
            </Button>
          </Form>
        </Col>
        <Col
          // className="bg-primary col d-none d-lg-block d-md-block full-height"
          className="col d-none d-lg-block d-md-block full-height"
          style={{
            "background-image": 'url("/images/background-image.jpg")',
            "background-position": "center",
            "background-repeat": "no-repeat",
            "background-size": "cover",
          }}
        ></Col>
      </Row>
    </main>
  );
}
