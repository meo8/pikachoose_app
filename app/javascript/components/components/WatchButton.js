import React from "react"
import { Button } from "reactstrap"

const WatchButton = (props) => {
  const { filmDecision, renderDecisionBox } = props

  const addHistory = (event) => {
    event.preventDefault()
    renderDecisionBox()

    let newHistory = {
      film_id: filmDecision.id,
      title: filmDecision.title,
      overview: filmDecision.overview,
      vote_average: filmDecision.vote_average,
      release_date: filmDecision.release_date,
      comment: "Add comment"
    }

    console.log("newHistory:",newHistory)

    fetch("/histories",
    {
      method: 'POST',
      body: JSON.stringify(newHistory),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        return response.json()
      }
    })
  }

  return (
    <div id="watch-btn">
      <Button type="button" size="lg" onClick={addHistory}><h5>What to Watch</h5></Button>
    </div>
  )
}

export default WatchButton
