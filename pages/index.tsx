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
import { XFeature } from "../components";

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
              <h1 className="display-4 fw-bold">
                Choose From Over 100 High-Converting Landing Page Templates
              </h1>
              <p className="lead">
                We’ve distilled everything we know about conversion into
                ready-to-use templates for landing pages, popups, and sticky
                bars. Use our drag-and-drop builder to make a beautiful page
                fast—or start with a blank canvas.
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
        <XFeature
          descriptions={[
            "79% of B2B marketers say email is the most effective channel for demand generation, so it’s not surprising that squeeze pages are one of the most important and effective landing pages out there.",
            "A squeeze page is one in which the goal is to capture the user’s email address. Once you have the address, you can begin to nurture that lead with relevant content and other offers.",
            "The most common type of squeeze page is gated content or a prompt to enter your email address to receive a newsletter, ebook, whitepaper, or other content offer.",
            "Make sure your squeeze page is simple, your CTA is tempting enough to get your user to give up their email address, and you make it easy for users to click out of the page and onto the content that brought them to your site.",
          ]}
          image={{
            height: 528.67134,
            src: "/images/undraw_landing_page_re_6xev.svg",
            width: 873,
          }}
          title="Squeeze Page"
          type="right"
        ></XFeature>
      </Container>

      <Container className="p-5">
        <XFeature
          descriptions={[
            "A splash landing page doesn’t always have lead capture as the main goal. These pages are often used when someone clicks a social media or content link. Instead of being sent directly to the article or social media destination, the user is sent to an intermediary page: the splash page.",
            "This page might share an announcement with the user, such as “We’ve just unveiled new dates for our 2019 marketing conference!” It might also ask your user for a language preference or to enter their age. The splash page might also present an ad, which the publisher benefits from, if the user clicks on the ad.",
          ]}
          image={{
            height: 528.67134,
            src: "/images/undraw_landing_page_re_6xev.svg",
            width: 873,
          }}
          title="Splash Page"
          type="left"
        ></XFeature>
      </Container>

      <Container className="p-5">
        <XFeature
          descriptions={[
            "A lead capture page is similar to a squeeze page, but generally sources more information. Name, business name, email address, job title, and industry are just a few things these landing pages seek to earn.",
            "The information you request depends on the goals for the page and those of your sales and marketing teams, as well as where the customer is in the funnel. If your lead capture page is top of the funnel, step away from the eight-lined form, please.",
            "If, however, your customer is landing on your lead capture page after demonstrating real interest in your product/service (i.e., they downloaded two case studies) you should be able to ask for more information to help qualify and direct them.",
          ]}
          image={{
            height: 528.67134,
            src: "/images/undraw_landing_page_re_6xev.svg",
            width: 873,
          }}
          title="Lead Capture Page"
          type="right"
        ></XFeature>
      </Container>

      <Container className="p-5">
        <XFeature
          descriptions={[
            "Every marketer knows you must provide value to your customer before asking them for money. A click-through landing page provides that value without pummeling your customer with a “Buy Now” button before they’re ready.",
            "Often, this looks like a landing page that shares the benefits and features of your product/service with a CTA button encouraging your customer to try a free trial. Once they click on that button, they’re taken to another landing page which provides pricing details and requires payment information to begin the trial.",
            "By the time your customer lands on this page, however, they're primed and educated on why they should move forward with the trial. In the examples below, you see the click-through landing page, and then the payment landing page customers are sent to when they decide to embark on a free trial.",
          ]}
          image={{
            height: 528.67134,
            src: "/images/undraw_landing_page_re_6xev.svg",
            width: 873,
          }}
          title="Click-Through Landing Page"
          type="left"
        ></XFeature>
      </Container>

      <Container className="p-5">
        <XFeature
          descriptions={[
            "A “Get Started” landing page should lead with your offer above the fold. Take this page, from Mailchimp, which explains their overarching benefits: tools that turn audience data into insights that will guide campaigns.",
            "Hooked already? Great, because a “Get Started” button awaits. Need more convincing? Well, the details follow as you scroll a feature- and benefit-laden landing page.",
          ]}
          image={{
            height: 528.67134,
            src: "/images/undraw_landing_page_re_6xev.svg",
            width: 873,
          }}
          title="“Get Started” Landing Page"
          type="right"
        ></XFeature>
      </Container>

      <Container className="p-5">
        <div className="p-2 text-center">
          <h2 className="display-4 fw-normal">Pricing</h2>
        </div>

        <Row>
          <Col className="p-2" md={{ offset: 2, span: 4 }}>
            <Card className="text-center">
              <Card.Header>Starter</Card.Header>
              <Card.Body>
                <Card.Title>
                  <h3>
                    $0<small className="text-muted fw-light">/mo</small>
                  </h3>
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
            <Card className="text-center">
              <Card.Header>Pro</Card.Header>
              <Card.Body>
                <Card.Title>
                  <h3>
                    $5<small className="text-muted fw-light">/mo</small>
                  </h3>
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
