import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  const linkStyle = {
    display: 'block', // Change to 'block' for mobile and 'inline-block' for larger screens
    margin: '5px',
    borderRadius: '50%',
    padding: '10px',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '20px', // Specify the unit for font-size
  };

  return (
    <Container className='mt-4'>
      <Row>
        <Col xs={6} sm={3} className='foot'>
          <a
            href="https://www.facebook.com/claudio.andrinyaina/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <FaFacebook />
          </a>
        </Col>
        <Col xs={6} sm={3}>
          <a
            href="https://twitter.com/claudio_andrian"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <FaTwitter />
          </a>
        </Col>
        <Col xs={6} sm={3}>
          <a
            href="https://www.linkedin.com/in/claudio-andriniaina-78367b243/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <FaLinkedin />
          </a>
        </Col>
        <Col xs={6} sm={3}>
          <a
            href="https://github.com/claudioandriaan"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <FaGithub />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
