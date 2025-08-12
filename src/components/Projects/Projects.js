import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tictac from "../../Assets/Projects/tictac.png";
import nsshome from "../../Assets/Projects/nsshome.png";
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
              imgPath={nsshome}
              isBlog={false}
              title="BloodBankDetails"
              description="Introducing our full-stack MERN application designed to streamline blood donation management. The platform enables organizations, donors, hospitals, and administrators to store and manage donation records with secure authentication. Built with optimized RESTful APIs. This system was developed for NSS to digitize blood donation workflows, ensuring faster access to real-time data and improving coordination between stakeholders"
              ghLink="https://github.com/ashish0425/blood-bank-app"
              demoLink="https://nss-blood-bank.netlify.app/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Climate navigator"
              description="Presenting Climate Navigator: a dynamic web application developed in May 2023. Crafted an engaging UI with HTML, CSS, and JavaScript. Enhanced functionality with a user-friendly search feature, providing streamlined access to city-specific weather data. Leveraged OpenWeatherMap API for real-time weather updates, displaying a comprehensive 6-day forecast for optimal user experience."
              ghLink="https://github.com/ashish0425/weather-app/tree/main/weather"
              demoLink="https://weather-app3847.netlify.app/"
            />
          </Col>
     
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
