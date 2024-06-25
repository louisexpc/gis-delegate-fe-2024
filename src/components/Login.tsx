import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Spinner,
} from "react-bootstrap";
import { verifyCode } from "../axios";

const Login = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const onSubmit = async () => {
    setShowLoader(true);
    const regTest = /^(AI|SF|SC)\d{3}$/.test(code);
    if (regTest && (await verifyCode(code))) {
      localStorage.setItem("giscode", code);
      navigate(`/${code}`);
    } else {
      if (code === "") setError("Please enter a value");
      else if (!regTest) setError("Invalid GIS code format");
      else setError("GIS code not found");
    }
    setShowLoader(false);
  };

  return (
    <Container className="tw-font-gis tw-pt-[2%] tw-w-[90%]">
      <Row>
        <h2 className="tw-font-bold tw-px-2 tw-py-2"> Welcome to GIS 2024!</h2>
      </Row>
      <Row>
        <Card body className="tw-px-2 tw-w-full">
          <Card.Title>Please enter your GIS code</Card.Title>
          <Row className="tw-flex-nowrap">
            <Col xs={9}>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="string"
                    placeholder="AI___"
                    onChange={(e) => setCode(e.target.value)}
                  />
                </Form.Group>
                {error !== "" ? (
                  <p className="tw-font-bold tw-text-red-600">{error}</p>
                ) : (
                  <></>
                )}
              </Form>
            </Col>
            <Col>
              <Button
                variant="outline-primary"
                onClick={onSubmit}
                className="tw-w-20 tw-whitespace-nowrap"
              >
                {showLoader ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </Col>
          </Row>
        </Card>
      </Row>
    </Container>
  );
};

export default Login;
