import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={bitsOfCode}
              isBlog={false}
              title="Puma Clone"
              description="A fully responsive web-based clone of the Puma e-commerce website. Built to demonstrate frontend development skills, featuring modern UI components, smooth navigation, and a user-friendly layout."
              ghLink="https://github.com/smthakor007/Puma_Web"
              demoLink="https://preeminent-yeot-e28311.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Hotel Management System"
              description="A comprehensive Hotel Management System built with React.js. It features component architecture, Redux for state management, JSON server integration, data fetching and display for rooms and reservations, reservation management (creation, updating, cancellation), sorting and filtering functionalities."
              ghLink="https://github.com/smthakor007/Hotelmapp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Blog App"
              description="A full-stack blog application enabling users to read, write, and manage blog posts. Equipped with a rich text editor for post creation and a responsive design for reading across different devices."
              ghLink="https://github.com/smthakor007/blog-app"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
