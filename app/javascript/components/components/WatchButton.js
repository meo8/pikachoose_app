import React from "react"
import { Button } from "reactstrap"

const WatchButton = (props) => {
  const { setDisplayToGenreButtons } = props

  return (
    <div id="watch-btn">
      <Button type="button" size="lg" onClick={setDisplayToGenreButtons}>
        Pika-Choose!
      </Button>
    </div>
  )
}

export default WatchButton
