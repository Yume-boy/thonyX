import React from 'react'
import { Container, Carousel, Card, Row, Col } from 'react-bootstrap';

const ProofOfWork = () => {
  return (
    <div>
        <Container className="proof-of-work-section my-5 d-none d-md-block">
            <h2 className="text-center mb-4">Proof of Work</h2>
            <Carousel
            interval={3000}  // Adjust interval (in milliseconds) as needed
            indicators={false}  // Hide the slide indicators if not needed
            controls={false}    // Hide the control arrows if not needed
            fade={false}        // Set to true for fade effect between slides
            pause={false}       // Set to true to pause on hover
            wrap={true}         // Set to false to disable looping
            slide={true}        // Set to false for a fade effect
            >
            <Carousel.Item>
                <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className="work-card">
                    <Card.Img variant="top" src="../public/POW1.jpg" />
                    <Card.Body>
                        <Card.Title>Project 1</Card.Title>
                        <Card.Text>
                        Description of Project 1.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="work-card">
                    <Card.Img variant="top" src="../public/POW2.jpg" />
                    <Card.Body>
                        <Card.Title>Project 2</Card.Title>
                        <Card.Text>
                        Description of Project 2.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item>
                <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card className="work-card">
                    <Card.Img variant="top" src="../public/POW3.jpg" />
                    <Card.Body>
                        <Card.Title>Project 3</Card.Title>
                        <Card.Text>
                        Description of Project 3.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="work-card">
                    <Card.Img variant="top" src="../public/POW4.jpg" />
                    <Card.Body>
                        <Card.Title>Project 4</Card.Title>
                        <Card.Text>
                        Description of Project 4.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </Carousel.Item>
            </Carousel>
        </Container>



        <Container className="proof-of-work-section my-5 d-md-none">
    <h2 className="text-center mb-4">Proof of Work</h2>
    <Carousel
      interval={3000}  // Adjust interval (in milliseconds) as needed
      indicators={false}  // Hide the slide indicators if not needed
      controls={false}    // Hide the control arrows if not needed
      fade={false}        // Set to true for fade effect between slides
      pause={false}       // Set to true to pause on hover
      wrap={true}         // Set to false to disable looping
      slide={true}        // Set to false for a fade effect
    >
      <Carousel.Item>
        <Row xs={1} md={1} className="g-4">
          <Col>
            <Card className="work-card">
              <Card.Img variant="top" src="../public/POW1.jpg" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Description of Project 1.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row xs={1} md={1} className="g-4">
          <Col>
            <Card className="work-card">
              <Card.Img variant="top" src="../public/POW2.jpg" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Description of Project 1.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row xs={1} md={1} className="g-4">
          <Col>
            <Card className="work-card">
              <Card.Img variant="top" src="../public/POW3.jpg" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  Description of Project 1.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row xs={1} md={1} className="g-4">
          <Col>
            <Card className="work-card">
              <Card.Img variant="top" src="../public/POW4.jpg" />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  Description of Project 3.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
         
        </Row>
      </Carousel.Item>
    </Carousel>
  </Container>
    </div>



  )
}

export default ProofOfWork
