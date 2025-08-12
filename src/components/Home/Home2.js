import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myimgg from "../../Assets/myimgg.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        <Row>
          <Col md={12} className="home-about-resume">
            <h1>VIEW OR DOWNLOAD MY RESUME</h1>
            <p>
              You can view or download my resume by clicking the button below.
            </p>
            <Button variant="primary" href="https://drive.google.com/file/d/1wWGpFd9S9m7hRQdWfDWDz2wKNhTdsyTA/view?usp=drivesdk" target="_blank">
              View / Download Resume
            </Button>
          </Col>
        </Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am <b className="purple">Ashish Kumar</b>, a passionate{" "}
              <b className="purple">Software Engineer</b> and tech enthusiast,
              driven by the challenge of building scalable, impactful
              applications.
              <br />
              
              <br />
              I hold a{" "}
              <b className="purple">
                B.Tech in Electronics and Communication Engineering
              </b>{" "}
              from <b className="purple">NIT Jamshedpur</b>, where I honed my
              problem-solving and development skills through{" "}
              <i>real-world projects</i> and competitive programming.
              <br />
              <br />
              My core interests lie in{" "}
              <i>
                <b className="purple">
                  Web Technologies, Backend Engineering, and System Design
                </b>
              </i>
              , always aiming to create products that are both{" "}
              <b className="purple">innovative</b> and{" "}
              <b className="purple">efficient</b>.
              <br />
              <br />
              I am constantly exploring new technologies to make applications
              faster, smarter, and more user-friendly — because for me,
              <i> good enough is never enough</i>.
            </p>
          </Col>  
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myimgg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ashish0425"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashish-kumar-57057b245"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/ashish_0kumar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ashishgupta8568"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      
      </Container>
    </Container>
  );
}

export default Home2;
