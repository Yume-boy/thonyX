import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import 'animate.css'; // install via: npm install animate.css

const Skills = () => {
  const skills = [
    "React / Next.js",
    "JavaScript / TypeScript",
    "HTML / CSS / Bootstrap / Tailwind",
    "Node.js",
    "Git / GitHub",
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>Skills</h2>
          <ListGroup variant="flush">
            {skills.map((skill, idx) => (
              <ListGroup.Item 
                key={idx} 
                className={`animate__animated animate__fadeInUp`}
                style={{ animationDelay: `${idx * 0.2}s`, animationFillMode: 'both' }}
              >
                {skill}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
