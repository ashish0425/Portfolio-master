import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tictac from "../../Assets/Projects/tictac.png";
import trendyhomes from "../../Assets/Projects/trendyhomes.png";
import weather from "../../Assets/Projects/weather.png";
import passowrd from "../../Assets/Projects/password.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trendyhomes}
              isBlog={false}
              title="TrendyHomes"
              description="Introducing our real estate project, where users can seamlessly browse listings of homes for rent or sale. Upon interest, users can unlock landlord contact details by subscribing annually via Razorpay integration. Additionally, homeowners can effortlessly list their properties, offering a comprehensive platform for both seekers and providers in the housing market."
              ghLink="https://github.com/onlyharsh/real-estate"
              demoLink="https://trendyhomeshrs.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Climate navigator"
              description="Presenting Climate Navigator: a dynamic web application developed in May 2023. Crafted an engaging UI with HTML, CSS, and JavaScript. Enhanced functionality with a user-friendly search feature, providing streamlined access to city-specific weather data. Leveraged OpenWeatherMap API for real-time weather updates, displaying a comprehensive 6-day forecast for optimal user experience."
              demoLink="https://climatenavigator.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passowrd}
              isBlog={false}
              title="Password Generator"
              description="Introducing Password Generator: an intuitive web tool created in April 2022. Crafted with HTML, CSS, and JavaScript, it offers a seamless user experience. Customize passwords with alphabets, numbers, symbols, and personal text. Features a real-time password strength indicator for enhanced security awareness."
              ghLink="https://github.com/onlyharsh/password-generator"
              demoLink="https://password-generator-onlyharsh.netlify.app/"
            />
          </Col>

       
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
