import React, { Component } from "react"
import { Button } from "reactstrap"
import { Image, Container, Col, Row } from 'react-bootstrap';
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';

const About = (props) =>{
  const teamMembers = [
    {
      name: "Elizabeth H.",
      title: "Full-Stack Web Developer",
      funFact: "Fun fact",
      linkedin: "https://www.linkedin.com/in/elizabeth-h-1649a267/",
      github: "https://github.com/lizhavird",
      headshot: "https://i.imgur.com/7LEjOC2.jpg"
    },
    {
      name: "Meo Huynh",
      title: "Full-Stack Web Developer",
      funFact: "Fun fact",
      linkedin: "https://www.linkedin.com/in/meoh/",
      github: "https://github.com/meo8/",
      headshot: "https://i.imgur.com/fnDeeHX.jpg"
    },
    {
      name: "Heya Kwon",
      title: "Full-Stack Web Developer",
      funFact: "Fun fact",
      linkedin: "https://www.linkedin.com/in/heya",
      github: "https://github.com/Heyabird",
      headshot: "https://i.imgur.com/LPwvJGh.jpg"
    },
    {
      name: "Jonas Fernandes",
      title: "Full-Stack Web Developer",
      funFact: "Fun fact",
      linkedin: "https://www.linkedin.com/in/jonas-fernandes-dev/",
      github: "https://github.com/jonas-fernandes",
      headshot: "https://i.imgur.com/F0j1uKL.jpg"
    }
  ]

  return (
    <>
      <div id="aboutpage">
        {/* <h1>About</h1> */}
        <br/>
        <br/>
        <h2>About the App </h2>
        <br/>
        <p>What to watch? What to eat? What to buy?</p>
        <p>Everyday, we have to make so many little decisions.</p>
        <p>Pikachoose is an app that tackles the modern day decision fatigue by letting users quickly arrive at a decision.</p>
        <br/>
        <br/>
        <h2>About the Team </h2>
        <br/>
        <p>We are four web developers who met at LEARN Academy in San Diego.</p>
        <p>We love to build humorous and creative solutions to everyday problems and all suffer from the decision fatigue to differing degrees.</p>
        <br/>
      </div>

      <Container id="aboutimgs">
        <Row>
          {teamMembers.map((member, id) => {
            return (
              <Col xs={4} md={3} key={id}>
                <Card id="card">
                  <CardImg src={member.headshot}/>
                  <CardBody>
                    <CardTitle>{member.name}</CardTitle>
                    <CardSubtitle>{member.title}</CardSubtitle>
                    <CardText>{member.funFact}</CardText>
                    <Button className="linkedin-gihub-btn" color="warning"><a href={member.linkedin} target="_blank">Linkedin</a></Button>
                    <Button className="linkedin-gihub-btn" color="warning"><a href={member.github} target="_blank">GitHub</a></Button>
                  </CardBody>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  )
}

export default About
