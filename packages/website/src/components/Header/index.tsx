import { MouseEventHandler, useState } from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";

import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const Header = () => {
  const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);

  const handleProjectDropdownMouseEnter: MouseEventHandler<
    HTMLElement
  > = () => {
    setShowProjectsDropdown(true);
  };

  const handleProjectDropdownMouseLeave: MouseEventHandler<
    HTMLElement
  > = () => {
    setShowProjectsDropdown(false);
  };

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="dark"
        data-bs-theme="dark"
        className="py-3"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-3xl flex-grow-[0.2]">
            svante nilsson dev
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="flex-grow-1">
            <Nav className="me-auto my-2">
              <Nav.Link as={Link} to="/" className="text-xl">
                Home
              </Nav.Link>
              <NavDropdown
                as={Link}
                to="/projects"
                title="Projects"
                id="nav-dropdown-projects"
                className="text-xl"
                show={showProjectsDropdown}
                onMouseEnter={handleProjectDropdownMouseEnter}
                onMouseLeave={handleProjectDropdownMouseLeave}
              >
                <NavDropdown.Item as={Link} to="/projects/websocketchat">
                  Websocket Chat
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/projects">
                  All projects
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export { Header };
