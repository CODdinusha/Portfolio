import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dinusha Madhuranga </span>
            from <span className="purple"> Kegalle, Srilanka.</span>
            <br />
                I am an undergraduate student at Trincomalee Campus, Eastern
  	            University.
                <br />
                 I have proficiency in
                JavaScript, CSS, HTML, and Java, and have completed several
                projects showcasing my skills on my GitHub account.
                <br />
                 I am eager
                to apply my knowledge and gain hands-on experience in a
                dynamic and challenging environment.
            <br />
            
            <br />
            <br />
           
          </p>
          

          
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
