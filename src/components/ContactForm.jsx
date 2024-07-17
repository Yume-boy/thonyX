import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <div className='contact'>
        <Container className="py-5 contact">
            <h2>Contact Me</h2>
            <Form action="https://formspree.io/f/mzzpzonn" method="POST">
                <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" name='Name' />
                </Form.Group>
                <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" name='Email' />
                </Form.Group>
                <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} name='Message'/>
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3">
                Submit
                </Button>
            </Form>
        </Container>
    </div>
  )
}

export default ContactForm
