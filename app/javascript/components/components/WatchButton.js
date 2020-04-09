import React, { Component } from "react"
import { Button } from "reactstrap"

const WatchButton = (props) =>{
  const handleClick = () => {
    randomizeMovieTitles()
  }

  const randomizeMovieTitles = () => {
    const { watchList } = props
    const randomIndex = Math.floor(Math.random() * Math.floor(props.watchList.length));
    return watchList[randomIndex]
  }

  return (
    <Button color="primary" size="lg" onClick={handleClick}>
      <a href="">What to Watch</a>
    </Button>
  )
}

export default WatchButton
