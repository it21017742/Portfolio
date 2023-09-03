import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dushan Rathnakumara </span>
            from <span className="purple"> Sri Lanka.</span>
            <br />
            <br /> I am a third year student pursuing <span className="purple">BSc (Hons) in Information Technology Specialising in Information Technology </span> from <span className="purple">Sri Lanka Institute of Information Technology. </span>
            <br />
            <br />
            <br />
            Apart from coding, 
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Passionate Gamer.
            </li>
            <li className="about-activity">
              <ImPointRight /> I have a deep fascination with the Reading.
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling is my greatest source of inspiration.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
