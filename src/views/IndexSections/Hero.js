import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import openminds from '../openminds.png';
import sathya from '../Sathya.png';
import jk from '../jk.png';
class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    {/* <img
                      alt="..."
                      className="img-fluid"
                      src={openminds}
                      style={{ width: "200px" }}
                    /> */}

             

              <span class="text-default mr-1" style={{ fontSize: "30px", fontWeight: "bold" }}></span>                       

              <div class=" ">
                <span class="btn-inner--icon"></span>
                <span class="nav-link-inner--text ml-1" 
                 style={{ fontSize: "50px", fontWeight: "bold", color: "white" }}>
                   O<span class="nav-link-inner--text " 
                 style={{ fontSize: "30px", fontWeight: "bold", color: "white" }}>PEN</span>
                 M<span class="nav-link-inner--text " 
                 style={{ fontSize: "30px", fontWeight: "bold", color: "white" }}>INDS</span>
                   </span>
                </div>
                
                <p className="lead text-white"  >                         
                         <span class="btn-inner--text" style={{ fontSize: "23px", fontWeight: "bold" }}>
                            <span class="text-default mr-1" >Automate</span>
                            <span class="text-default mr-1" >Reuse</span>                         
                            <span class="text-default mr-1">Relax</span>
                         </span>                      
                </p>
                     
              <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2" 
                      style={{ fontSize: "12px", fontWeight: "bold" }}
                      >
                        Team Members <br></br>
                      </small>                      
              </div>
              <div className=""  >
                <p className="lead text-white" >
                    <img
                      alt="..."
                      src={openminds}
                      style={{ height: "100px" }}
                    />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                    <img
                      alt="..."
                      src={jk}
                      style={{ height: "100px" }}
                    />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                    <img
                      alt="..."
                      src={sathya}
                      style={{ height: "100px" }}
                    />
                </p>                
              </div>  
              <div className=""  >
                <p className="lead text-white" style={{ fontSize: "17px", fontWeight: "bold" }} >
                <span class="text-white mr-1" > Giriprasad M</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="text-white mr-1" >&nbsp;&nbsp;Jayakrishnan M</span>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span class="text-white mr-1" >Sathyabama R</span>
                </p>                
              </div>  
               
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
