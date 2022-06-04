import { Container, Nav, Navbar } from "react-bootstrap";

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
    </>
  );
}
