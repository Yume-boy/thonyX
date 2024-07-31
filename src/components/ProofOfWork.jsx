import React from 'react'
import { Container, Carousel, Card, Row, Col } from 'react-bootstrap';
import POW1 from './POW1.jpg'
import POW2 from './POW2.jpg'
import POW3 from './POW3.jpg'
import POW4 from './POW4.jpg'
import POW5 from './POW5.jpg'
import POW6 from './POW6.jpg'



const ProofOfWork = () => {
  return (
    <div>
        <Container className="proof-of-work-section my-5 d-none d-md-block">
            <h2 className="text-center mb-4">Brands I Have Partnered With</h2>
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
                    <Card.Img variant="top" src={POW1} />
                    <Card.Body>
                        <Card.Title>Ethereum Reserve Dollar</Card.Title>
                        <Card.Text>
                        Description of Project 1.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="work-card">
                    <Card.Img variant="top" src={POW2} />
                    <Card.Body>
                        <Card.Title>UpTo3</Card.Title>
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
                    <Card.Img variant="top" src={POW3} />
                    <Card.Body>
                        <Card.Title>Normal Finance</Card.Title>
                        <Card.Text>
                        Description of Project 3.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="work-card">
                    <Card.Img variant="top" src={POW4} />
                    <Card.Body>
                        <Card.Title>OpCloud</Card.Title>
                        <Card.Text>
                        Description of Project 4.
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
                    <Card.Img variant="top" src={POW5} />
                    <Card.Body>
                        <Card.Title>Axelar Network</Card.Title>
                        <Card.Text>
                        Description of Project 5.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="work-card">
                    <Card.Img variant="top" src={POW6} />
                    <Card.Body>
                        <Card.Title>UNITON TOKEN</Card.Title>
                        <Card.Text>
                        Description of Project 6.
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
              <Card.Img variant="top" src={POW1}/>
              <Card.Body>
                <Card.Title>Ethereum Reserve Dollar</Card.Title>
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
              <Card.Img variant="top" src={POW2} />
              <Card.Body>
                <Card.Title>UpTo3</Card.Title>
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
              <Card.Img variant="top" src={POW3} />
              <Card.Body>
                <Card.Title>Normal Finance</Card.Title>
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
              <Card.Img variant="top" src={POW4} />
              <Card.Body>
                <Card.Title>OpCloud</Card.Title>
                <Card.Text>
                  Description of Project 3.
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
              <Card.Img variant="top" src={POW5} />
              <Card.Body>
                <Card.Title>Axelar Network</Card.Title>
                <Card.Text>
                  Description of Project 3.
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
              <Card.Img variant="top" src={POW6} />
              <Card.Body>
                <Card.Title>UNITON TOKEN</Card.Title>
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
