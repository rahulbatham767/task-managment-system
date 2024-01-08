import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { logout } from "../app/features/ApiSlice";
import { useDispatch, useSelector } from "react-redux";
const Header = ({ setContext }) => {
  const dispatch = useDispatch();
  const { loggedIn, task } = useSelector((state) => state.user);
  const { msg, type } = task;
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      style={{ fontSize: "14px" }}
    >
      <Container fluid>
        <Navbar.Brand>
          <NavLink to={"/task-managment-system"}>
            {" "}
            Task Management System
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Item className="me-2">
              <NavLink to="/about">About</NavLink>
            </Nav.Item>
            <Nav.Item className="me-2">
              <NavLink to="/contact"> Contact Us</NavLink>
            </Nav.Item>
          </Nav>
          {loggedIn ? (
            <Nav className="ms-auto">
              <Nav.Item className="me-3">
                <NavLink to="/tasks">Tasks</NavLink>
              </Nav.Item>
              <Nav.Item className="me-3">
                <NavLink to="/addtask">Add Task</NavLink>
              </Nav.Item>
            </Nav>
          ) : (
            ""
          )}
        </Navbar.Collapse>
        <Nav>
          <Nav.Item className="me-2">
            {loggedIn ? (
              <NavLink
                onClick={() => {
                  dispatch(logout());
                  setContext({ msg, type, show: true });
                }}
              >
                Logout
              </NavLink>
            ) : (
              <Nav>
                <Nav.Item className="me-2">
                  <NavLink to="/login">User Login</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to="/register">User Register</NavLink>
                </Nav.Item>
              </Nav>
            )}{" "}
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
