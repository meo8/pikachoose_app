import React from "react"
import { Button } from "reactstrap"

const WatchButton = (props) => {
  const { filmDecision, renderDecisionBox } = props

  const addHistory = (event) => {
    event.preventDefault()
    // renderDecisionBox()

    console.log("button works")

    let newHistory = {
      film_id: filmDecision.id,
      title: filmDecision.title,
      overview: filmDecision.overview,
      vote_average: filmDecision.vote_average,
      release_date: filmDecision.release_date,
      comment: "No comments yet"
    }

    fetch("/histories",
    {
      method: 'POST',
      body: JSON.stringify(newHistory),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  return (
    <div id="watch-btn">
      <a href="/genres">
        <Button type="button" size="lg" onClick={addHistory}>
          What to Watch
        </Button>
      </a>
    </div>
  )
}

export default WatchButton
