import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <>
     <Container fluid className='mt-4 text-center'>
      <Navbar expand="lg" variant="dark" bg="success gradient">
        <Container className='text-center'>
          <Navbar.Brand href="#">  </Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
    </>
  )
}

export default Footer