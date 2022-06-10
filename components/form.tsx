import { useFormik } from "formik";
import mixpanel from "mixpanel-browser";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";
import {
  getAccessToken,
  IForm,
  IFormElement,
  IPage,
  sendMessage,
} from "../core";

export function XForm(props: IForm) {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: props.elements.reduce(
      (dict: { [key: string]: string }, element: IFormElement) => {
        dict[element.name] = "";

        return dict;
      },
      {}
    ),
    onSubmit: async (values) => {
      setIsLoading(true);

      mixpanel.track("Lead");

      try {
        await sendMessage(await getAccessToken())(
          `Contact ${values.name}, ${values.emailAddress}, ${values.mobileNumber}`
        );
      } catch {}

      window.location.href = "/";
    },
    validationSchema: yup.object(
      props.elements.reduce(
        (dict: { [key: string]: any }, element: IFormElement) => {
          if (element.type === "email") {
            dict[element.name] = yup.string().email().required();
          } else {
            dict[element.name] = yup.string().required();
          }

          return dict;
        },
        {}
      )
    ),
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      {props.elements.map((element: IFormElement) => (
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
        {props.submitButtonText}
      </Button>
    </Form>
  );
}
