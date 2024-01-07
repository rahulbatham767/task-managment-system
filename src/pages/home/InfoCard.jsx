import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const InfoCard = ({ elem }) => {
  const { heading, description, image } = elem;
  console.log(heading);
  return (
    <>
      <Container fluid className="mt-4">
        <Row>
          <Col
            md={7}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="information">
              <h3>{heading}</h3>

              <p>{description}</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="managment-image">
              <img src={image} alt="" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoCard;
