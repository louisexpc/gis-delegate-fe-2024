import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <>
      <Navbar
        expand="lg"
        variant="dark"
        sticky="top"
        className="tw-bg-gis-blue tw-font-gis"
      >
        <Container fluid>
          <Navbar.Brand
            href="/"
            className="tw-ml-[1%]"
            onClick={() => localStorage.removeItem("giscode")}
          >
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="tw-inline-block tw-align-top"
            />{" "}
            GIS Delegate Info Lookup
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="tw-mr-auto">
              <Nav.Item className="tw-ml-[1%]">
                <Nav.Link href="/map">Map</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
