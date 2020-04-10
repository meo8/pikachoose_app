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
    <Button color="primary" size="lg" onClick={handleClick}>
      <a href="">What to Watch</a>
    </Button>
  )
}

export default WatchButton
