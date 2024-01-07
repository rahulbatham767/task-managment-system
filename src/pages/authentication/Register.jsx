import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { getRegister } from "../../app/features/ApiSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Register = ({ setContext }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    gender: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await dispatch(getRegister(formData));

    setContext({ msg: "Registration Successful", type: "success", show: true });
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      gender: "",
      contact: "",
    });
  };
  return (
    <Container className="mt-4 mb-5 " style={{ width: "29rem" }}>
      <Card
        className="p-3 justify-content-center d-flex align-items-center"
        style={{ width: "30rem" }}
      >
        <div className="user-header">
          <h2>Register User</h2>
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="d-flex">
            <Form.Group className="mb-1" controlId="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First name"
                value={formData.firstname || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="ms-3 mb-1" controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last name"
                value={formData.lastname || ""}
                onChange={handleChange}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-1" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-1" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={formData.password || ""}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-1" controlId="gender">
            <Form.Label>Gender</Form.Label>
            <Form.Select value={formData.gender || ""} onChange={handleChange}>
              <option value="select Role">Select Sex</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="contact">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Enter Your Number"
              value={formData.contact || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" size="block" className="p-3" type="submit">
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Register;
