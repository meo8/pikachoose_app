import React from "react"
import { Button } from "reactstrap"

const WatchButton = (props) => {
  const { filmDecision, setDisplayToGenreButtons } = props

  const addHistory = (e) => {
    e.preventDefault()
    setDisplayToGenreButtons()

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
    })
  }

  return (
    <div id="watch-btn">
      <Button type="button" size="lg" onClick={addHistory}>
        What to Watch
      </Button>
    </div>
  )
}

export default WatchButton
