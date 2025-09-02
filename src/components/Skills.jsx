import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import 'animate.css';

const Skills = () => {
  const skills = [
    "React / Next.js",
    "JavaScript / TypeScript",
    "HTML / CSS / Bootstrap / Tailwind",
    "Node.js",
    "Git / GitHub",
  ];

  return (
    // <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10} className='my-5'>
          <Card className="p-4 shadow-sm border-0 rounded-4 animate__animated animate__fadeInUp">
            <Card.Body>
              <h2 className="mb-3 fw-bold">Skills</h2>
              <ListGroup variant="flush">
                {skills.map((skill, idx) => (
                  <ListGroup.Item
                    key={idx}
                    className="border-0 ps-0 animate__animated animate__fadeInUp"
                    style={{ animationDelay: `${idx * 0.2}s`, animationFillMode: 'both' }}
                  >
                    <span className="fw-medium">• {skill}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    // </Container>
  );
};

export default Skills;
