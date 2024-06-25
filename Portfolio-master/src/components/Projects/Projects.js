import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cal from "../../Assets/Projects/image3.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import ecommerce from "../../Assets/Projects/image1.png";
import suicide from "../../Assets/Projects/suicide.png";
import login from "../../Assets/Projects/image2.png";

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
              imgPath={ecommerce}
              isBlog={false}
              title="E-commerce"
              description="I developed a dynamic and responsive e-commerce website front end using React.js and Node.js. This project leverages modern web technologies, including HTML, CSS, and JavaScript, to create an engaging user experience."
              ghLink="https://github.com/CODdinusha/E-commerce-web-site"
              demoLink="https://coddinusha.github.io/E-Commerce/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={login}
              isBlog={false}
              title="A Login Sign up page"
              description="I developed a comprehensive login and signup application using React.js and Node.js, along with HTML, CSS, and JavaScript. This project showcases a secure and user-friendly authentication system ."
              ghLink="https://github.com/CODdinusha/Create-a-Responsive-website"
              demoLink=": https://coddinusha.github.io/Portfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cal}
              isBlog={false}
              title="Simple Calculator"
              description="I developed a fully functional calculator application using React.js, along with HTML, CSS, and JavaScript. This project highlights my ability to create interactive and user-friendly web applications. "
              ghLink="https://github.com/CODdinusha/Calculator-"
                            
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cal}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
