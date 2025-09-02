import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'animate.css';

const About = () => {
  return (
    // <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10} className='my-5'>
          <Card className="p-4 shadow border-0 rounded-4 animate__animated animate__fadeInUp">
            <Card.Body>
              <h2 className="mb-3  fw-bold">About Me</h2>
              <p className="lead">
                I am a passionate and dedicated <strong>Software Engineer/Web Developer </strong>  
                with a strong foundation in building responsive and scalable web applications.
                My journey into tech started with curiosity and has evolved into a career
                of solving problems and creating impactful solutions across industries.
              </p>
              <p>
                I enjoy working in <strong>collaborative environments</strong>, constantly 
                learning new technologies, and turning ideas into functional, user-friendly 
                products. My work experience spans across healthcare, store management, and 
                innovative startups.
              </p>
              <blockquote className="blockquote mb-0 text-muted fst-italic">
                “Code is like humor. When you have to explain it, it’s bad.”
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    // </Container>
  );
};

export default About;
