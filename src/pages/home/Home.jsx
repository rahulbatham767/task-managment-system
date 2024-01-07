import Banner from "./Banner";
import InfoCard from "./InfoCard";
import Container from "react-bootstrap/Container";
import InfoCard2 from "./InfoCard2";
import info from "./info.json";
const Home = () => {
  return (
    <>
      {/* <Banner /> */}
      <Container fluid>
        {info.map((elem) => {
          return elem.id % 2 === 0 ? (
            <InfoCard key={elem.id} elem={elem} />
          ) : (
            <InfoCard2 key={elem.id} elem={elem} />
          );
        })}
      </Container>
    </>
  );
};

export default Home;
