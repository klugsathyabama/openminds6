import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import openminds from 'openminds.png';
import Axios from 'axios';
import {AppContext} from './Context';

import AddEntity from './AddEntity';
import AddComm from './AddComm';
import AddPM from './AddPM';
import AddMsgTem from './AddMsgtem';
import JsonTem from './Impjson';
// reactstrap components
import {   
  NavItem,
  NavLink,
  Nav,
  Container,   
  Card,
  CardBody,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";
// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
class Master extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };
state = {
    post_found:true,
    new_entity:false
}
addNewentity = (id,name,email) => {
    if(this.state.post_found){
        this.setState({
            new_entity:{id:id,entity_name:name}
        });
    }
    else{
        this.setState({
            post_found:true
        });
    }
    
}

postShow = (show) => {
    this.setState({
        post_found:show
    })
}
  render() {

    const contextValue = {
      new_entity:this.state.new_entity,
      addNewentity:this.addNewentity,
      post_show:this.postShow
  }
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

        <h3 className="h4 font-weight-bold mb-4" >
         <span style={{color: "white"}}>
         One Time Entry
            </span>          
          </h3>
        <Row className="justify-content-center">
          <Col lg="126">
            {/* Tabs with icons */}            
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-cloud-upload-96 mr-2" />
                    Entity
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-bell-55 mr-2" />
                    Communication Master
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 3
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-calendar-grid-58 mr-2" />
                    Process Mapping
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 4}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 4
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 4)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-calendar-grid-58 mr-2" />
                   Message Template
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.iconTabs === 5}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.iconTabs === 5
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 5)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-calendar-grid-58 mr-2" />
                  
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"iconTabs" + this.state.iconTabs}>
                  <TabPane tabId="iconTabs1">
                  <AddEntity/>
                  </TabPane>
                  <TabPane tabId="iconTabs2">
                  <AddComm/>
                  </TabPane>
                  <TabPane tabId="iconTabs3">
                  <AddPM/>
                  </TabPane>
                  <TabPane tabId="iconTabs4">
                  <AddMsgTem/>

                  </TabPane>
                  <TabPane tabId="iconTabs5">
                  
                  
                  </TabPane>
                </TabContent>
              </CardBody>
            </Card>
          </Col>
          <Col className="mt-5 mt-lg-0" lg="6">
            {/* Menu */}
            
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 1}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    Json Import
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 2}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 2
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 2)}
                    href="#pablo"
                    role="tab"
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    aria-selected={this.state.plainTabs === 3}
                    className={classnames("mb-sm-3 mb-md-0", {
                      active: this.state.plainTabs === 3
                    })}
                    onClick={e => this.toggleNavs(e, "plainTabs", 3)}
                    href="#pablo"
                    role="tab"
                  >
                    Messages
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <Card className="shadow">
              <CardBody>
                <TabContent activeTab={"plainTabs" + this.state.plainTabs}>
                  <TabPane tabId="plainTabs1">
                  <JsonTem/>
                  
                  </TabPane>
                  <TabPane tabId="plainTabs2">
                     
                  </TabPane>
                  <TabPane tabId="plainTabs3">
                     
                  </TabPane>
                </TabContent>
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

export default Master;
