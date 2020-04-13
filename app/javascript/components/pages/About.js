import React, { Component } from "react"
import { Button } from "reactstrap"

const About = (props) =>{
  return (
    <div>
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
   
    <div class="about_us_imgs">
          <div class="text">
            <h3>Elizabeth H.</h3>
            <h5 ><a href="https://www.linkedin.com/in/elizabeth-h-1649a267/" target="_blank">Linkedin</a>/</h5>    
            <h5><a href="https://github.com/lizhavird" target="_blank">GitHub</a>/</h5>
          </div> 
          <div class="img"><img src={'https://i.imgur.com/7LEjOC2.jpg'}/></div>
    </div>
    <div class="about_us_imgs">
        <div class="text"> 
          <h3>Meo H.</h3>  
          <h5><a href="https://www.linkedin.com/in/meoh/" target="_blank">Linkedin</a>/</h5>
          <h5><a href="https://github.com/meo8/" target="_blank">GitHub</a>/</h5>
        </div>    
        <div class="img"><img src={'https://i.imgur.com/fnDeeHX.jpg'}/></div>    
    </div>
    <div class="about_us_imgs">
        <div class="text">    
          <h3>Heya Kwon</h3>
          <h5><a href="https://www.linkedin.com/in/heya" target="_blank">Linkedin</a>/</h5>
          <h5><a href="https://github.com/Heyabird" target="_blank">GitHub</a>/</h5> 
        </div>
        <div class="img"><img src={'https://i.imgur.com/LPwvJGh.jpg'}/></div>
    </div>
    <div class="about_us_imgs">
        <div class="text">  
          <h3>Jonas Fernandes</h3>  
          <h5><a href="https://www.linkedin.com/in/jonas-fernandes-dev/" target="_blank">Linkedin</a>/</h5>
          <h5><a href="https://github.com/jonas-fernandes" target="_blank">GitHub</a>/</h5>
        </div> 
        <div class="img"><img src={'https://i.imgur.com/F0j1uKL.jpg'}/></div>
    </div>
 </div>
  )
}

export default About
