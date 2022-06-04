import axios from "axios";
import { useFormik } from "formik";
import moment from "moment";
import { useMemo, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import * as yup from "yup";

function useQueryParams() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export function SqueezePage() {
  const params = useParams();

  const queryParams = useQueryParams();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);

      if (useQueryResult.data.airtable) {
        await axios.post(
          `https://api.airtable.com/v0/${useQueryResult.data.airtable.baseId}/${useQueryResult.data.airtable.tableName}`,
          {
            records: [
              {
                fields: {
                  "Email Address": values.emailAddress,
                  Timestamp: moment().format("YYYY-MM-DD"),
                  Source: queryParams.has("queryParams")
                    ? queryParams.get("utm_source")
                    : "organic",
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
      }

      setStatus("end");

      if (useQueryResult.data.action.url) {
        window.location.href = useQueryResult.data.action.url;
      }
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
      `/data/pages/${params.slug || "a-silly-newsletter"}.json`
    );

    return response.data;
  });

  const [isLoading, setIsLoading] = useState(false);

  const [status, setStatus] = useState("main");

  if (!useQueryResult.data) {
    return <></>;
  }

  if (status === "end") {
    return (
      <main>
        <Row className="align-items-center m-0">
          <Col className="col p-5" md={6} sm={12} xs={12}>
            <h1 className="display-2">{useQueryResult.data.pages.end.title}</h1>
            <p className="lead">
              <b>{useQueryResult.data.pages.end.subtitle}</b>
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
          <h1 className="display-2">{useQueryResult.data.pages.main.title}</h1>
          {useQueryResult.data.pages.main.subtitle ? (
            <p className="lead">
              <b>{useQueryResult.data.pages.main.subtitle}</b>
            </p>
          ) : null}

          <p className="lead">{useQueryResult.data.pages.main.description}</p>

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
              {useQueryResult.data.action.text}
            </Button>
          </Form>
        </Col>

        {useQueryResult.data.pages.main.image ? (
          <Col
            className="col full-height"
            style={{
              backgroundImage: `url("${useQueryResult.data.pages.main.image}")`,
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
