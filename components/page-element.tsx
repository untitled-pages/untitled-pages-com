import { Col, Row } from "react-bootstrap";
import { IPageElement } from "../core";
import { XForm } from "./form";

export function XPageElement(props: IPageElement) {
  if (props.type === "col") {
    return (
      <Col {...props.props}>
        {props.elements.map((pageElement: IPageElement, index: number) => (
          <XPageElement key={index} {...pageElement}></XPageElement>
        ))}
      </Col>
    );
  }

  if (props.type === "form") {
    return <XForm {...props.props}></XForm>;
  }

  if (props.type === "h1") {
    return <h1 {...props.props}>{props.content}</h1>;
  }

  if (props.type === "img") {
    return <img {...props.props} />;
  }

  if (props.type === "p") {
    return <p {...props.props}>{props.content}</p>;
  }

  if (props.type === "row") {
    return (
      <Row {...props.props}>
        {props.elements.map((pageElement: IPageElement, index: number) => (
          <XPageElement key={index} {...pageElement}></XPageElement>
        ))}
      </Row>
    );
  }

  return <></>;
}
