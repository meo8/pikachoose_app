import React, { Component } from "react"
import { Button } from "reactstrap"

const WatchButton = (props) =>{
  const { watchList, sendAnswer, changeDisplay } = props

  const handleClick = () => {
    randomizeMovieTitles()
    displayAnswerBox()
  }

  const randomizeMovieTitles = () => {
    const randomIndex = Math.floor(Math.random() * Math.floor(watchList.length))
    sendAnswer(watchList[randomIndex])
  }

  return (
    <Button color="primary" size="lg" onClick={handleClick}>
      <a href="">What to Watch</a>
    </Button>
  )
}

export default WatchButton
