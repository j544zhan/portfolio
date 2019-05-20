import React, { Component } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

import { Row, Col } from 'reactstrap';

class About extends Component {
  render() {
    return (
      <BaseLayout title="Allison Zhang - About Me" {...this.props.auth}>
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side">
                <h1 className="title fadein">Hello there, </h1>
                <h4 className="subtitle fadein">I'm Allison</h4>
                <p className="subsubTitle fadein">Feel free to read a short description about me and check out the links below.</p>
                <a className="subsubTitle fadein" target="_blank" href="https://github.com/j544zhan">
                  <img className="logo" src="/static/github.ico"/>
                </a>
                <a className="subsubTitle fadein" target="_blank" href="https://linkedin.com/in/AllisonZZ">
                  <img className="logo" src="/static/linkedin.ico"/>
                </a>
                <a className="subsubTitle fadein" target="_blank" href="mailto:j544zhan@edu.uwaterloo.ca">
                  <img className="logo" src="/static/close-envelope.ico"/>
                </a>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>I am a student from University of Waterloo. </p>
                <p>

                I am currently enrolled in 4th year of Computing and Financial Management (CFM) Program, 
                which is a joint degree of both Computer Science (CS) and Accounting and Financial Management 
                (AFM) programs. Throughout
                </p>
                <p>
                I have completed four co-op terms so far, and gained experience of working on 
                a wide range of technologies and projects from Python development for in-house CMS tools to web 
                applications in React, GrapesJS, and NextJS.
                </p>
                
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}



 

export default About;
