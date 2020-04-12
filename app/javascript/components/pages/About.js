import React, { Component } from "react"
import { Button } from "reactstrap"

const About = (props) =>{
  return (
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
      <p>*insert member photos linked to our linkedin here*</p>
    </div>
  )
}

export default About
