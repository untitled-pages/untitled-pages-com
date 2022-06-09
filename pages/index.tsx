import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Card,
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

const Home: NextPage = () => {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Untitled Pages</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://github.com/untitled-pages">
                GitHub
              </Nav.Link>
              <Nav.Link href="/founder">Founder</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="bg-light">
        <Container className="p-5">
          <Row className="gy-5 m-0">
            <Col md={6} sm={12}>
              <h1 className="display-4 fw-bold">Turn visitors into leads</h1>
              <p className="lead">
                Start relationships on the right foot with a friendly page that
                invite people to leave their email.
              </p>

              <div className="d-lg-flex d-md-flex d-sm-flex d-flex-lg-row d-flex-md-row d-flex-sm-column">
                <Button className="m-2" size="lg" variant="primary">
                  Get started for free
                </Button>
                <Button className="m-2" size="lg" variant="outline-primary">
                  Contact us
                </Button>
              </div>
            </Col>
            <Col>
              <Image
                alt="Illustration"
                height={528.67134}
                src="/images/undraw_landing_page_re_6xev.svg"
                unoptimized={true}
                width={873}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="p-5">
        <Row className="gy-5 m-0">
          <Col className="d-none d-md-block">
            <Image
              alt="Illustration"
              height={528.67134}
              src="/images/undraw_landing_page_re_6xev.svg"
              unoptimized={true}
              width={873}
            />
          </Col>
          <Col md={{ offset: 2, span: 6 }} sm={12}>
            <h1 className="display-5">Build your survey</h1>
            <p className="lead">
              Customize a template or start fresh. Bring it all to life with
              images, videos, and GIFs.
            </p>
          </Col>
          <Col className="d-block d-md-none">
            <Image
              alt="Illustration"
              height={528.67134}
              src="/images/undraw_landing_page_re_6xev.svg"
              unoptimized={true}
              width={873}
            />
          </Col>
        </Row>
      </Container>

      <Container className="p-5">
        <Row className="gy-5 m-0">
          <Col md={6} sm={12}>
            <h1 className="display-5">Engage your audience</h1>
            <p className="lead">
              Launch your page from an email or embed right into your site. No
              coding needed.
            </p>
          </Col>
          <Col md={{ offset: 2, span: 4 }} sm={12}>
            <Image
              alt="Illustration"
              height={528.67134}
              src="/images/undraw_landing_page_re_6xev.svg"
              unoptimized={true}
              width={873}
            />
          </Col>
        </Row>
      </Container>

      <Container className="p-5">
        <Row className="gy-5 m-0">
          <Col className="d-none d-md-block">
            <Image
              alt="Illustration"
              height={528.67134}
              src="/images/undraw_landing_page_re_6xev.svg"
              unoptimized={true}
              width={873}
            />
          </Col>
          <Col md={{ offset: 2, span: 6 }} sm={12}>
            <h1 className="display-5">Collect leads</h1>
            <p className="lead">
              Sync responses to your email platform, or ping your sales team in
              Slack. Send the data where you work best.
            </p>
          </Col>
          <Col className="d-block d-md-none">
            <Image
              alt="Illustration"
              height={528.67134}
              src="/images/undraw_landing_page_re_6xev.svg"
              unoptimized={true}
              width={873}
            />
          </Col>
        </Row>
      </Container>

      <Container className="p-5">
        <div className="p-2 text-center">
          <h1 className="display-4 fw-normal">Pricing</h1>
        </div>

        <Row>
          <Col className="p-2" md={{ offset: 2, span: 4 }}>
            <Card className=" text-center">
              <Card.Header>Starter</Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1>
                    $0<small className="text-muted fw-light">/mo</small>
                  </h1>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque mi mauris, consectetur vel feugiat in, pretium et
                  ante.
                </Card.Text>
                <Button variant="primary">Sign up</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="p-2" md={4} sm={12}>
            <Card className=" text-center">
              <Card.Header>Pro</Card.Header>
              <Card.Body>
                <Card.Title>
                  <h1>
                    $5<small className="text-muted fw-light">/mo</small>
                  </h1>
                </Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque mi mauris, consectetur vel feugiat in, pretium et
                  ante.
                </Card.Text>
                <Button variant="primary">Sign up</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="p-5">
        <footer>
          <Row>
            <Col className="py-2" md={2} sm={12}>
              <h5>Untitled Pages</h5>
              <ul className="flex-column nav">
                <li className="mb-2 nav-item">
                  <Link href="/">
                    <a className="nav-link p-0 text-muted">Home</a>
                  </Link>
                </li>
                <li className="mb-2 nav-item">
                  <Link href="https://github.com/untitled-pages">
                    <a className="nav-link p-0 text-muted">GitHub</a>
                  </Link>
                </li>
                <li className="mb-2 nav-item">
                  <Link href="/founder">
                    <a className="nav-link p-0 text-muted">Founder</a>
                  </Link>
                </li>
              </ul>
            </Col>

            <Col className="py-2" md={{ offset: 6, span: 4 }} sm={12}>
              <form>
                <h5>Don&apos;t miss out</h5>
                <p>Sign up for our newsletter to stay in the loop</p>
                <div className="d-flex gap-2 w-100">
                  <label className="visually-hidden">Email address</label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </Col>
          </Row>

          <div className="border-top d-flex justify-content-between my-4 py-4">
            <p>&copy; {new Date().getFullYear()} Untitled Pages</p>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Home;

export async function getStaticProps({ params }: { params: any }) {
  return {
    props: {
      meta: {
        description:
          "Start relationships on the right foot with a friendly page that invite people to leave their email.",
        image: "/images/open-graph-image.jpg",
        title: "Untitled Pages - Turn visitors into leads",
        url: "https://untitledpages.com",
      },
    },
  };
}
