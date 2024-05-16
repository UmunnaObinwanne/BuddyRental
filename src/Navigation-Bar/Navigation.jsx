import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";

function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="nav-link text-decoration-none">
              BuddyRent!
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link className="nav-link mx-3" to="/about">
                About
              </Link>
              <Link className="nav-link mx-3" to="#">
                Contact
              </Link>
              <Link className="nav-link mx-3" to="/friends">
                Friends
              </Link>
              <Link className="nav-link mx-3" to="/host">
                Sign-In
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer />
    </div>
  );
}

export default NavigationBar;
