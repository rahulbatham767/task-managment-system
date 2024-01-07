// src/AboutPage.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <Container className="mt-5">
      <h1>About Task Management</h1>
      <Row className="mt-4">
        <Col>
          <p>
            Task management refers to the process of planning, organizing, and
            tracking tasks and activities to achieve specific goals or
            objectives. It is a crucial aspect of project management and
            individual productivity. Effective task management helps individuals
            and teams stay organized, meet deadlines, and accomplish their
            objectives efficiently.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Our Team</h2>
          <ul>
            <li>John Doe - CEO</li>
            <li>Jane Smith - Lead Developer</li>
            {/* Add more team members */}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
