// src/ContactPage.js
import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Feedback submitted:", feedback);
  };

  return (
    <Container fluid className="mt-5 mb-4">
      <Container className="w-100">
        <h1>Contact Us</h1>
        <Row className="mt-4">
          <Col>
            <p>
              If you have any questions, suggestions, or feedback, please use
              the form below to get in touch with us.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="feedbackForm">
                <Form.Label>Your Feedback</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={7}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Submit Feedback
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
