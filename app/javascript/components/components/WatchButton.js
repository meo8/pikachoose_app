import React, { Component } from "react"
import { Button } from "reactstrap"

const WatchButton = (props) =>{
  const { watchList, sendFilmDecision } = props

  const handleClick = (event) => {
    event.preventDefault()
    const randomIndex = Math.floor(Math.random() * Math.floor(watchList.length))
    sendFilmDecision(watchList[randomIndex])
  }

  return (
    <Button color="primary" size="lg" onClick={handleClick}>
      <a href="">What to Watch</a>
    </Button>
  )
}

export default WatchButton
