import Image from "next/image";
import { Col, Row } from "react-bootstrap";

export function XFeature(props: {
  descriptions: Array<string>;
  image: {
    height: number;
    src: string;
    width: number;
  };
  title: string;
  type: "left" | "right";
}) {
  if (props.type === "left") {
    return (
      <Row className="gy-5 m-0">
        <Col md={6} sm={12}>
          <h2 className="display-5">{props.title}</h2>
          {props.descriptions.map((description: string, index: number) => (
            <p className="lead" key={index}>
              {description}
            </p>
          ))}
        </Col>
        <Col md={{ offset: 2, span: 4 }} sm={12}>
          <Image
            alt="Illustration"
            height={props.image.height}
            src={props.image.src}
            unoptimized={true}
            width={props.image.width}
          />
        </Col>
      </Row>
    );
  }

  if (props.type === "right") {
    return (
      <Row className="gy-5 m-0">
        <Col className="d-none d-md-block">
          <Image
            alt="Illustration"
            height={props.image.height}
            src={props.image.src}
            unoptimized={true}
            width={props.image.width}
          />
        </Col>
        <Col md={{ offset: 2, span: 6 }} sm={12}>
          <h2 className="display-5">{props.title}</h2>
          {props.descriptions.map((description: string, index: number) => (
            <p className="lead" key={index}>
              {description}
            </p>
          ))}
        </Col>
        <Col className="d-block d-md-none">
          <Image
            alt="Illustration"
            height={props.image.height}
            src={props.image.src}
            unoptimized={true}
            width={props.image.width}
          />
        </Col>
      </Row>
    );
  }

  return <></>;
}
