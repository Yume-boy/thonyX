import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import P1 from './P1.jpg'
import P2 from './P2.jpg'
import P3 from './P3.jpeg'
import P4 from './P4.jpeg'
import P5 from './P5.jpeg'
import P6 from './P6.jpeg'
import P7 from './P7.jpeg'
import P8 from './P8.jpeg'
import P9 from './P9.jpeg'
import P10 from './P10.jpeg'
import P11 from './P11.jpeg'
import P12 from './P12.jpeg'
// import P13 from './P13.jpeg'
// import P14 from './P14.jpeg'

const Proof = () => {

    const proofItems = [
        { id: 1, image: P1, twitterLink: 'https://x.com/the_realthonyx/status/1816791316224672156' },
        { id: 2, image: P2, twitterLink: 'https://x.com/the_realthonyx/status/1817549847169282222?s=46' },
        { id: 3, image: P3, twitterLink: 'https://x.com/The_realThonyX/status/1812047215604441106' },
        { id: 4, image: P4, twitterLink: 'https://x.com/the_realthonyx/status/1815311619292831844?s=46' },
        { id: 5, image: P5, twitterLink: 'https://x.com/the_realthonyx/status/1776188702487695590?s=46' },
        { id: 6, image: P6, twitterLink: 'https://x.com/the_realthonyx/status/1769350092484497670?s=46' },
        { id: 7, image: P7, twitterLink: 'https://x.com/the_realthonyx/status/1763309960631312498?s=46' },
        { id: 8, image: P8, twitterLink: 'https://x.com/the_realthonyx/status/1763204766203576560?s=46' },
        { id: 9, image: P9, twitterLink: 'https://x.com/the_realthonyx/status/1751542612941500444?s=46' },
        { id: 10, image: P10, twitterLink: 'https://x.com/the_realthonyx/status/1746504602520887612?s=46' },
        { id: 11, image: P11, twitterLink: 'https://x.com/the_realthonyx/status/1721905702040690913?s=46' },
        { id: 12, image: P12, twitterLink: 'https://x.com/the_realthonyx/status/1817549847169282222?s=46' },
        
      ];

  return (
    <Container className="proof-section my-5">
        <h2 className="text-center mb-4">Proof of Work</h2>
        <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {proofItems.map(item => (
            <Col key={item.id}>
            <Card className="proof-card">
                <a href={item.twitterLink} target="_blank" rel="noopener noreferrer" className='text-reset text-decoration-none'>
                <Card.Img variant="top" src={item.image} alt={`Proof ${item.id}`} />
                <p className='mt-2 ms-2'>Click to visit</p>
                </a>
            </Card>
            </Col>
        ))}
        </Row>
    </Container>
  )
}

export default Proof
