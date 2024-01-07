import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const InfoCard2 = ({ elem }) => {
  console.log(elem.image);
  return (
    <>
      <Container fluid className="mt-4">
        <Row>
          <Col md={4}>
            <div className="managment-image">
              <img src={elem.image} alt="" className="img-fluid" />
            </div>
          </Col>
          <Col
            md={7}
            className="d-flex align-items-center justify-content-center"
          >
            <div className="information">
              <h3>{elem.heading}</h3>
              <p>{elem.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InfoCard2;
