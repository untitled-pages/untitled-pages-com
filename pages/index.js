import { Button, Container, Nav, Navbar } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Untitled Pages</Navbar.Brand>
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

      <div className="bg-light p-5">
        <Container className="py-5">
          <h1 className="display-5 fw-bold">Untitled Pages</h1>
          <p className="col-md-8 fs-4">
            A powerful landing page builder that helps create high-converting
            landing pages and drive sales for businesses. Lead generation and
            opt-in tools integrated.
          </p>
          <Button size="lg" variant="primary">
            Get Started
          </Button>
        </Container>
      </div>
    </>
  );
}
