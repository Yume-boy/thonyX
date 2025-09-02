import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Experience = () => {
  const experiences = [
    {
      role: "Associate Web Developer",
      company: "Skilltop Empire, Abuja",
      period: "Sept 2024 – Present",
      description: "Collaborated with a team of developers to design and implement scalable solutions in the medical and store management sectors."
    },
    {
      role: "Front-End Development Intern",
      company: "Skilltop Empire, Abuja",
      period: "June 2024 – Aug 2024",
      description: "Built responsive UIs with React and Bootstrap, optimized web performance, and contributed to team projects while gaining practical industry experience."
    }
  ];

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h2>Experience</h2>
          {experiences.map((exp, idx) => (
            <Card key={idx} className="mb-3 shadow-sm">
              <Card.Body>
                <Card.Title>{exp.role}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {exp.company} | {exp.period}
                </Card.Subtitle>
                <Card.Text>{exp.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
