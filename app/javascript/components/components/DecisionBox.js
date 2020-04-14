import React, { useEffect } from "react";
import { Jumbotron, Button } from "reactstrap";

const DecisionBox = (props) => {
  const { filmDecision } = props
  // React hook; works like componentDidMount
  useEffect(() => {
    addHistory()
  })

  const addHistory = () => {
    let newHistory = {
      film_id: filmDecision.id,
      title: filmDecision.title,
      overview: filmDecision.overview,
      vote_average: filmDecision.vote_average,
      release_date: filmDecision.release_date,
      comment: "Add comment"
    }

    console.log("Added to History:",newHistory)

    fetch("/histories",
    {
      method: 'POST',
      body: JSON.stringify(newHistory),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  addFavorite = (history) => {
    console.log("addFavorite(history):",history)
    let newFavorite = {
      film_id: history.id,
      title: history.title,
      overview: history.overview,
      vote_average: history.vote_average,
      release_date: history.release_date,
      comment: history.comment
    }

    // fetch method gets specific history with the id in our back-end and UPDATES it
    fetch("/favorites",
    {
      method: 'POST',
      body: JSON.stringify(newFavorite),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log("newFavorite:", JSON.stringify(newFavorite))
  }

  return (
    <Jumbotron>
      <h1 className="display-4">{filmDecision.title}</h1>
      <p className="lead">{filmDecision.overview}</p>
      <hr className="my-2" />
      <p>Rating: {filmDecision.vote_average}/10</p>
      <p>Release date: {filmDecision.release_date}</p>
      <p className="lead"><Button color="success" onClick={() => this.addFavorite(filmDecision)}>Add to Favorite</Button></p>
    </Jumbotron>
  );
};

export default DecisionBox;
