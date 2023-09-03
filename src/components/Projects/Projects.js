import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


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
              
              isBlog={false}
              title="TestTopic"
              description="Yet to add the description. Still testing. buttons not working"
              ghLink="https://github.com/it21017742"
              demoLink="https://github.com/it21017742"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
