import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Row, Col, ListGroup } from 'react-bootstrap';
import './App.css';
import TypedText from './components/TextTyped';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import logo from './assets/logo-1.png'
import logo2 from './assets/logo-2.jpg'
import logo3 from './assets/logo-3.jpg'
import logo4 from './assets/logo-4.jpg'

function App() {
  return (
    <>
      <div className="container mt-5">
        <Row className="main">
        <Col md={4} className="sticky-top">
          <h1 className='pb-4 pt-2'>
            <a href='#' className='title-nom'>Claudio andrian</a>
          </h1>

          <h5 className="muted">
            <TypedText />
          </h5>
          <p>I build accessible, inclusive products and digital experiences for the web.</p>
          
          <br />

          <Navigation />
          <br />
          <Footer/>

        </Col>

          <Col >
            <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
              <section id="about"  style={{ marginTop: '30px', height: '100vh', padding: '30px' }}>
                <p>
                Hey, I'm Claudio, <br /><br />
                A dedicated and versatile Web Developer with a passion for crafting exceptional web experiences. With a strong foundation in front-end and back-end technologies, I bring websites to life with sleek designs, smooth functionality, and a user-centric approach.
                <br /> My expertise doesn't stop at traditional web development. I'm also a skilled Web Scraper Developer, harnessing the power of automation and data extraction to provide valuable insights and solutions. From e-commerce data mining to real-time content aggregation, I thrive on turning data into actionable information
                </p>
                <br />
                
                
              </section>
              
              <section id="experiences">
                {/* Content of The Experiences */}
                <div className="container">
                  <div className="row pt-3 exp p-2 mr-0">
                    <div className="col-md-4">
                      <h5>
                        2022 - Present
                      </h5>
                    </div>

                    <div className="col-md-8">
                      <b>Web Scraping Developer -</b><strong>AutoBiz</strong>

                      <div className="item pt-3">
                        <p>
                        Responsable de création des robots pour extraire automatiquement des données à partir de sites Web ciblés. <br />
                        <br />
                        Mise en place de stratégies d'exploration efficaces pour collecter des informations pertinentes et fiables.  <br /> <br />
                        Traiter et nettoyer les données collectées pour assurer leur qualité et leur cohérence. <br /> <br />
                        Répondre aux besoins des analystes (extractions, statistique).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row pt-3 exp p-2 pr-0">
                    <div className="col-md-4">
                      <h5>
                        Sept. 2021 - Jan. 2022 
                      </h5>
                    </div>

                    <div className="col-md-8">
                      <b>Web Application Developer -</b><strong>IMMOBILIER GESTION CONSEIL</strong>

                      <div className="item pt-3">
                        <p>
                           Development of a web application for human resources management
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row pt-3 exp p-2 pr-0">
                    <div className="col-md-4">
                      <h5>
                        June 2021 - août 2021
                      </h5>
                    </div>

                    <div className="col-md-8">
                      <b>Web Application Developer -STAGE- </b><strong>Ministère de l'Éducation nationale, de la Jeunesse et des Sports</strong>

                      <div className="item pt-3">
                        <p>
                          Conception et développement d'une application de gestion d'une bibliothèque
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </section>
              <br />
              <section id="project" className='gap-3' style={{ marginTop: '70px', padding: '30px' }}>
                <div className="container">
                  <div className="row pt-3 exp p-2 pr-0">
                    <div className="col-md-4 col-sm-12">
                      <img src={logo} className='img-fluid' alt="logo-1" style={{ maxWidth: '100%' }} />
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <b>Crawl site </b><strong>https://www.carsireland.ie/</strong>
                      <div className="item pt-3">
                        <p>
                          Script that works with crawling the list and detail Pages
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row pt-3 exp p-2 pr-0">
                    <div className="col-md-4 col-sm-12">
                      <img src={logo2} alt="logo-2" className='img-fluid' style={{ maxWidth: '100%' }} />
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <b>Crawl site </b><strong>https://www.carsireland.ie/</strong>
                      <div className="item pt-3">
                        <p>
                          Script that works with crawling the list and detail Pages
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row pt-3 exp p-2 pr-0">
                    <div className="col-md-4 col-sm-12">
                      <img src={logo3} alt="logo-3" className='img-fluid' style={{ maxWidth: '100%' }} />
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <b>Crawl site </b><strong>https://www.carsireland.ie/</strong>
                      <div className="item pt-3">
                        <p>
                          Script that works with crawling the list and detail Pages
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row pt-3 exp p-2 pr-0">
                    <div className="col-md-4 col-sm-12">
                      <img src={logo4} alt="logo-4" className='img-fluid' style={{ maxWidth: '100%' }} />
                    </div>
                    <div className="col-md-8 col-sm-12">
                      <b>Crawl site </b><strong>https://www.carsireland.ie/</strong>
                      <div className="item pt-3">
                        <p>
                          Script that works with crawling the list and detail Pages
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default App;
