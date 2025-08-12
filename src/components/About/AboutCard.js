import React from "react";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashish Kumar</span> from{" "}
            <span className="purple">Bihar, India</span>.
            <br />
            I graduated with a <span className="purple">B.Tech in Electronics and Communication Engineering </span> 
            from <span className="purple"> NIT Jamshedpur</span> (2021–2025).
            <br />
            <br />
            I have hands-on experience as a <span className="purple">Software Engineer Intern</span> at{" "}
            <span className="purple">GAP Inc.</span>, where I optimized backend solutions using Java, Spring Boot, and Spring — 
            improving performance and enhancing system scalability.
            <br />
            <br />
            Beyond academics and work, I am passionate about{" "}
            <span className="purple">competitive programming, full-stack development</span>, and 
            building impactful projects such as <b>BloodBankDetails</b> and <b>Climate Navigator</b>.
            <br />
            <br />
            Some highlights of my journey:
          </p>
          <ul>
            <li className="about-activity">
              <FaStar /> Secured <b>Rank 3</b> in SECE Coding Competition & won <b>Most Consistent Performer Award</b>.
            </li>
            <li className="about-activity">
              <FaStar /> Global Rank <b>1908</b> in Google Code Jam Farewell Round A.
            </li>
            <li className="about-activity">
              <FaStar /> Finalist at <b>PCON Code-Mania Hackathon</b>.
            </li>
            <li className="about-activity">
              <FaStar /> Solved <b>450+</b> problems across LeetCode, Coding Ninjas, and GeeksforGeeks.
            </li>
            <li className="about-activity">
              <FaStar /> Captain of Official Basketball Team & General Secretary of NSS, NIT Jamshedpur.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
