//import React from "react";
import React, { Component } from 'react';
import axios from 'axios';
import { UncontrolledAlert } from "reactstrap";
import {AppContext} from './Context';

//import { setUserSession } from './Utils/Common';
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
  Col, 
  NavLink, 
  Row   
} from "reactstrap";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js"; 
  
  
class Login extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    
    username: '',
    password: '' 
  }

}
handleChange = event => {
  this.setState({ username: event.target.value });
}
handleChangePwd = event => {
  this.setState({ password: event.target.value });
}
  handleSubmit = event => {
    event.preventDefault();

    const user = { 
      username:this.state.username,
      password:this.state.password
    };
     
    axios.post(`http://socalled.co.in/openminds/signin.php`, { username:this.state.username, password:this.state.password})     
   .then(function ({data}) {
      if(data.success === 1){        
          console.log(data.token); 
          alert(data.message);
     //     <NavLink activeClassName="active" to="/"></NavLink>
           // props.history.push('/dashboard');
           this.props.history.push('/')
           } 
           if(data.success != 1){
             if (data.success === 0)
             console.log(data);
             alert(data.message);
             if (data.success === 2) {
              alert(data.message);   
              <UncontrolledAlert color="success" fade={true}>
              <span className="alert-inner--icon">
                <i className="ni ni-like-2" />
              </span>
              <span className="alert-inner--text ml-1">
                <strong>Success!</strong> This is a success alert—check it out!
              </span>
            </UncontrolledAlert>
             }
             
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
                        <small>Sign in with credentials</small>
                      </div>
                      <Form role="form" onSubmit={this.handleSubmit}>
                        <FormGroup className="mb-3">
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni  ni-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="Username" type="text"   name="username" onChange={this.handleChange} />
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
                              type="password" name="password" onChange={this.handleChangePwd}
                              autoComplete="off"
                            />
                          </InputGroup>
                        </FormGroup>                        
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />

                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button
                            className="my-4"
                            color="primary"
                            type="submit"
                            >
                            Sign in
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <a
                        className="text-light"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <small>Forgot password?</small>
                      </a>
                    </Col>
                    <Col className="text-right" xs="6">
                      <a
                        className="text-light"
                        href="/register-page"
                        //onClick={e => e.preventDefault()}
                      >
                        <small>Create new account</small>
                      </a>
                    </Col>
                  </Row>
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
  


export default Login;
