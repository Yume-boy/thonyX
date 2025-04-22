import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="align-items-center">
          <Col>
            <p>&copy; 2023 Your Name. All Rights Reserved.</p>
            <p>Designed by Merak</p>
          </Col>
          <Col className="text-end">
            <a href="https://www.linkedin.com/in/yourprofile" className="mx-2" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://x.com/The_realThonyX" className="mx-2"  rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="t.me/The_realThony" className="mx-2">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;