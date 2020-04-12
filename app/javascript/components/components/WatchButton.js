import React, { Component } from "react"
import { Button } from "reactstrap"

const WatchButton = (props) =>{
  const { filmList, sendFilmDecision } = props

  const handleClick = (event) => {
    event.preventDefault()
    const randomIndex = Math.floor(Math.random() * Math.floor(filmList.length))
    sendFilmDecision(filmList[randomIndex])
  }

  return (
    <div id="watch-btn">
      <a href="">
        <Button size="lg" onClick={handleClick}><h5>What to Watch</h5></Button>
      </a>
    </div>
  )
}

export default WatchButton
