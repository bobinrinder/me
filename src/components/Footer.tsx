import ExternalLink from "./ExternalLink";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="pt-5 pb-1">
        <Row>
          <Col>
            <hr className="mb-4" />
          </Col>
        </Row>
        <Row className="pb-2">
          <Col lg="4" md="12">
            <p>
              <ExternalLink href="https://github.com/bobinrinder/me">
                Get this template on Github
              </ExternalLink>
            </p>
          </Col>
          <Col lg="4" md="12" className="text-secondary text-center">
            <p>
              Built with{" "}
              <ExternalLink href="https://vite.dev/">Vite</ExternalLink> in
              Vancouver, BC
            </p>
          </Col>
          <Col lg="4" md="12" className="text-secondary text-lg-right">
            <p>© {new Date().getFullYear()} Robin Binder</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
