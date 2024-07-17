import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <Container className="my-5 py-5">
      <h2>Testimonials</h2>
      <Row>
        <Col md={4}>
          <blockquote className="blockquote">
            <p>"Great work!"</p>
            <footer className="blockquote-footer">Client 1</footer>
          </blockquote>
        </Col>
        <Col md={4}>
          <blockquote className="blockquote">
            <p>"Highly recommended!"</p>
            <footer className="blockquote-footer">Client 2</footer>
          </blockquote>
        </Col>
        <Col md={4}>
          <blockquote className="blockquote">
            <p>"Exceeded expectations!"</p>
            <footer className="blockquote-footer">Client 3</footer>
          </blockquote>
        </Col>
      </Row>
    </Container>
  )
}

export default Testimonials
