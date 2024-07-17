import React from 'react'
import { Accordion, Container } from 'react-bootstrap';

const FAQ = () => {
  return (
    <Container className="my-5 py-5">
        <h2 className='mb-4'>Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>How do you charge</Accordion.Header>
            <Accordion.Body>
            Answer to question 1.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
            <Accordion.Header>How do i contact you</Accordion.Header>
            <Accordion.Body>
            Answer to question 2.
            </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
            <Accordion.Header>Question 3</Accordion.Header>
            <Accordion.Body>
            Answer to question 3.
            </Accordion.Body>
        </Accordion.Item>
        </Accordion>
    </Container>
  )
}

export default FAQ
