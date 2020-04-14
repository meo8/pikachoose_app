import React, { Component } from "react"
import { Button } from "reactstrap"
import { Image, Container, Col, Row } from 'react-bootstrap';
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';

const About = (props) =>{
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
  
<Container id ="aboutimgs">
  <Row>
    <Col xs={4} md={3}>
      <Card id="card">
          <CardImg src="https://i.imgur.com/7LEjOC2.jpg"/>
          <CardBody>
            <CardTitle>Elizabeth H.</CardTitle>
            <CardSubtitle>Full-Stack Web Developer</CardSubtitle>
            <CardText>more text if u want</CardText>
            <Button id="button" color="warning"><a href="https://www.linkedin.com/in/elizabeth-h-1649a267/" target="_blank">Linkedin</a></Button>
            <Button id="button" color="warning"><a href="https://github.com/lizhavird" target="_blank">GitHub</a></Button>
          </CardBody>
        </Card>
    </Col>    
    <Col xs={4} md={3}>  
      <Card id="card">
          <CardImg src="https://i.imgur.com/fnDeeHX.jpg"/>
          <CardBody>
            <CardTitle>Meo H.</CardTitle>
            <CardSubtitle>Full-Stack Web Developer</CardSubtitle>
            <CardText>more text if u want</CardText>
            <Button id="button" color="warning"><a href="https://www.linkedin.com/in/meoh/" target="_blank">Linkedin</a></Button>
            <Button id="button" color="warning"><a href="https://github.com/meo8/" target="_blank">GitHub</a></Button>
          </CardBody>
      </Card>
    </Col>  
    <Col xs={4} md={3}>
      <Card id="card">
          <CardImg src="https://i.imgur.com/LPwvJGh.jpg"/>
          <CardBody>
            <CardTitle>Heya Kwon</CardTitle>
            <CardSubtitle>Full-Stack Web Developer</CardSubtitle>
            <CardText>more text if u want</CardText>
            <Button id="button" color="warning"><a href="https://www.linkedin.com/in/heya" target="_blank">Linkedin</a></Button>
            <Button id="button" color="warning"><a href="https://github.com/Heyabird" target="_blank">GitHub</a></Button>
          </CardBody>
      </Card>
    </Col>
    <Col xs={4} md={3}>
      <Card id="card">
          <CardImg src="https://i.imgur.com/F0j1uKL.jpg"/>
          <CardBody>
            <CardTitle>Jonas Fernandes</CardTitle>
            <CardSubtitle>Full-Stack Web Developer</CardSubtitle>
            <CardText>more text if u want</CardText>
            <Button id="button" color="warning"><a href="https://www.linkedin.com/in/jonas-fernandes-dev/" target="_blank">Linkedin</a></Button>
            <Button id="button" color="warning"><a href="https://github.com/jonas-fernandes" target="_blank">GitHub</a></Button>
          </CardBody>
      </Card>
    </Col>
  </Row>
</Container>
    
 </>
  )
}

export default About
