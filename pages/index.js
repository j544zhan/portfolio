import React, { Component } from "react";
import Typed from 'react-typed';

import BaseLayout from "../components/layouts/BaseLayout";
import {Button, Container, Row, Col} from 'reactstrap';

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    }

    this.roles = ['Developer', 'Dog Lover', 'Python, C/C++', 'JavaScript, HTML/CSS',
                  'Django', 'React', 'Nextjs', 'Grapesjs', 'Git', 'Windows, MacOS, Linux', 'Learning Java', 'Team Player', 'Self Motivated'];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 6000);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { isFlipping } = this.state;
    return (
      <BaseLayout className={`cover ${isFlipping ? 'cover-1' : 'cover-0'}`} {...this.props.auth} headerType='index' title='Allison Zhang - Portfolio'>
      <div className="main-section">
        <div className="background-image">
          <img src="/static/images/background-index.png" />
        </div>

        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper ${isFlipping ? 'isFlipping' : ''}`}>
                  <div className="front">
                    <div className="hero-section-content">
                      <h2> Student at University of Waterloo </h2>
                      <div className="hero-section-content-intro">
                        4A Computing and Financial Management
                      </div>
                    </div>
                    <img alt="Guy programming welcome picture" className="image" src="/static/images/section-2.jpg"/>
                    <div className="shadow-custom shadow-custom-2">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>

                  <div className="back">
                    <div className="hero-section-content-up">
                      <h2> Software Developer </h2>
                      <div className="hero-section-content-intro-up">
                        Have a look at my portfolio and cv.
                      </div>
                    </div>
                    <img alt="Guy programming welcome picture" className="image" src="/static/images/section-1.jpg"/>
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  { isAuthenticated && <span><b> { user.name } </b></span>}
                  Welcome to my portfolio website.
                  Learn more about my experience and co-op history through the years!
                </h1>
              </div>
              <Typed
                loop
                typeSpeed={60}
                backSpeed={60}
                strings={this.roles}
                backDelay={1000}
                loopCount={0}
                showCursor
                className="self-typed"
                cursorChar="|"
              />
              <div className="hero-welcome-bio">
                <h2>
                  Let's take a look at my work.
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>

    );
  }
}

export default Index;
