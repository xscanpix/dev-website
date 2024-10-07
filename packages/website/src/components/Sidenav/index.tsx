import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Nav
        className=""
        style={{
          flexDirection: "column",
          minWidth: "10rem",
        }}
      >
        <Nav.Link as={NavLink} to="projects/websocketchat">
          Websocket
        </Nav.Link>
        <Nav.Link as={NavLink} to="projects/websocketchat">
          Websocket
        </Nav.Link>
        <Nav.Link as={NavLink} to="projects/websocketchat">
          Websocket
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default SideNav;
