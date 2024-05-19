import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";

function NavigationBar() {
  const activeStyles = {
    textDecoration: "underline",
    fontWeight: "bold",
    color: "#161616",
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="nav-NavLink text-decoration-none">
              BuddyRent!
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink
                className="nav-NavLink mx-3"
                to="/about"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                About
              </NavLink>
              <NavLink
                className="nav-NavLink mx-3"
                to="/contact"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Contact
              </NavLink>
              <NavLink
                className="nav-NavLink mx-3"
                to="/friends"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Friends
              </NavLink>
              <NavLink
                className="nav-NavLink mx-3"
                to="/host"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Sign-In
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet className="outlet" />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default NavigationBar;
