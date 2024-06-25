import { Container, Row, Card } from "react-bootstrap";

const Map = () => {
  return (
    <Container className="tw-font-gis tw-pt-[2%] tw-mb-[10vh] tw-w-[90%]">
      <Row>
        <h2 className="tw-font-bold tw-px-2 tw-py-2">
          Map of National Taiwan University
        </h2>
      </Row>
      <Row>
        <Card body className="tw-px-2 tw-w-full tw-h-[100rem]">
          <iframe
            title="map"
            className="responsive-iframe tw-w-full tw-h-[100rem]"
            src={"https://map.ntu.edu.tw/ntu-eng.html"}
          ></iframe>
        </Card>
      </Row>
    </Container>
  );
};

export default Map;
