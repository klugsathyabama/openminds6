//import React from "react";
import React, { Component } from 'react';
import axios from 'axios';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {      
      username: '',
      useremail : '',
      password: '' 
    }
  
  }
  handleChange = event => {
    this.setState({ username: event.target.value });
  }
  handleChangePwd = event => {
    this.setState({ password: event.target.value });
  }
  handleChangeEmail = event => {
    this.setState({ useremail: event.target.value });
  }
    handleSubmit = event => {
      event.preventDefault();
  
      const user = { 
        username:this.state.username,
        useremail:this.state.useremail,
        password:this.state.password
      }; 
      axios.post(`http://socalled.co.in/openminds/register.php`,
       { username:this.state.username, useremail:this.state.useremail, password:this.state.password})     
     .then(function ({data}) {
        if(data.success === 1){        
          //  console.log(data.token); 
            alert(data.message);
       //     <NavLink activeClassName="active" to="/"></NavLink>
             // props.history.push('/dashboard');
             this.props.history.push('/Dashboard')
             } 
             if(data.success != 1){
               if (data.success === 0) alert(data.message);
               if (data.success === 2) alert(data.message);   
             } 
    }.bind(this))
    .catch(function (data) {
    console.log(data);
    alert("Something went wrong. Please try again later.");      
           
    });
  
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pt-lg-7">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Sign up with credentials</small>
                      </div>
                      <Form role="form" onSubmit={this.handleSubmit}>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Username" type="text"   name="username" onChange={this.handleChange}  />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Email" type="email"   name="useremail" onChange={this.handleChangeEmail}  />
                          </InputGroup>
                        </FormGroup>
                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"   name="password" onChange={this.handleChangePwd} 
                              autoComplete="off"
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-muted font-italic">
                          <small>
                            password strength:{" "}
                            <span className="text-success font-weight-700">
                              strong
                            </span>
                          </small>
                        </div>
                        <Row className="my-4">
                          <Col xs="12">
                            <div className="custom-control custom-control-alternative custom-checkbox">
                              <input
                                className="custom-control-input"
                                id="customCheckRegister"
                                type="checkbox"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheckRegister"
                              >
                                <span>
                                  I agree with the{" "}
                                  <a
                                    href="https://www.ramco.com/erp-suite/"
                                    target = "_blank"
                                  >
                                    Privacy Policy
                                  </a>
                                </span>
                              </label>
                            </div>
                          </Col>
                        </Row>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            type="submit"
                          >
                            Create account
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Register;
