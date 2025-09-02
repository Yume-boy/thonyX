import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center">
          <Image 
            src="/profile.jpg" // replace with your image
            roundedCircle 
            fluid 
            alt="Profile"
          />
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>
            I am a passionate and dedicated Software Engineer/Web Developer with 
            experience in building responsive web applications. My journey into tech 
            started with curiosity and has evolved into a career of solving problems 
            and creating impactful solutions across industries like healthcare and 
            store management.
          </p>
          <p>
            I thrive in collaborative environments, enjoy continuous learning, and 
            love turning ideas into scalable, functional products.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
