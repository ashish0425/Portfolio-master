import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/myImg.jpg";
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
            <Button variant="primary" href="https://drive.google.com/file/d/1JflJxYHHpXnEfuhYo0w-1VMUPk6k3Snw/view?usp=drive_link" target="_blank">
              View / Download Resume
            </Button>
          </Col>
        </Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a 3rd year undergraduate at NIT Jamshedpur
              <br />
             
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products. </b>
              </i>
              <br />
              <br />
              I am a <b className="purple">tech geek</b> and always learn and explore things related to <i><b className="purple">Technology and Softwares</b></i>.
              <br />
             
              <br />
              Currently I'm learning different <i><b className="purple">System Design Concepts</b></i> to make an application fast and scalable.
              <br />
              <br />
              My hobbies are watching movies, <a className="purple" style={{ "textDecoration": "none" }} href="https://anilist.co/user/shivambhadani/animelist" target={"_blank"}>webseries and reading books</a>.
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
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
                  href="https://github.com/onlyharsh"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/onlyharsh/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/harshr784"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/only_hars/"
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
