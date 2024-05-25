import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Particle from "../Particle";
import ContactImg from "../../Assets/contact.svg";
import { CgMail } from "react-icons/cg";
import {ImLocation} from "react-icons/im";
import {AiOutlineInstagram, AiOutlineMail} from "react-icons/ai"
import {AiFillPhone} from "react-icons/ai"
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
function Contact() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            style={{
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get in Touch With <strong className="purple">Me</strong>
            </h1>

            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <ul>
                  <li className="about-activity">
                      <AiFillPhone /> Mobile : <a className="purple" style={{ "textDecoration": "none" }} href="9931354033" target={"_blank"}>9931354033</a>
                      <br />
                      <br />
                    </li>
                    <li className="about-activity">
                      <AiOutlineMail /> Email : <a className="purple" style={{ "textDecoration": "none" }} href="mailto:harshr784@gmail.com" target={"_blank"}>harshr784@gmail.com</a>
                      <br />
                      <br />
                    </li>

                    
                    <li className="about-activity">
                      <AiOutlineTwitter /> Twitter : <a className="purple" style={{ "textDecoration": "none" }} href="https://twitter.com/harshr784" target={"_blank"}>@harshr784</a>
                      <br />
                      <br />
                    </li>
                    <li className="about-activity">
                      <AiOutlineInstagram /> Instagram : <a className="purple" style={{ "textDecoration": "none" }} href="https://instagram.com/only_hars" target={"_blank"}>@only_hars</a>
                      <br />
                      <br />
                    </li>
                     
                    <li className="about-activity">
                      <ImLocation /> Address : Room No.- B214, Hostel-K, NIT Jamshedpur, 831014.
                      <br/>
                      <br/>
                      
                    </li>

                  </ul>
                </blockquote>
              </Card.Body>
            </Card>


          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={ContactImg} alt="contact" className="img-fluid" />
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Contact;
