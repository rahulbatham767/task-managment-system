import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { getLogin } from "../../app/features/ApiSlice";

function Login({ setContext }) {
  const dispatch = useDispatch();
  const emailref = useRef(undefined);
  const passwordref = useRef(undefined);
  const roleref = useRef(undefined);
  const navigate = useNavigate();
  const { msg, type } = useSelector((state) => state.user.task);
  const login = async (event) => {
    event.preventDefault();

    const email = emailref.current.value;
    const password = passwordref.current.value;
    const role = roleref.current.value;
    console.log(email, password, role);
    const data = {
      email,
      password,
      role,
    };
    dispatch(getLogin(data))
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        setContext({ msg: err, show: true, type: "warning" });
      });
  };

  return (
    <Container
      className="mt-5 mb-5 justify-content-center"
      style={{ width: "29rem" }}
    >
      <Card className="p-3">
        <h3 className="text-center">User Login</h3>
        <Form onSubmit={login}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailref}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSelect">
            <Form.Label>User Role</Form.Label>
            <Form.Select ref={roleref}>
              <option value="select Role">Select Role</option>
              <option value="admin">Admin</option>
              <option value="Employee">Employee</option>
              <option value="Manager">Manager</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordref}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
