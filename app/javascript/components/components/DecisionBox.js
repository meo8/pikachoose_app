import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import Pikachu3 from "./pikachu3.png"

class DecisionBox extends Component {
  constructor() {
    super()
    this.state = {
      filmList: [],
      histories: [],
      favorites: [],
      editable: null
    }
  }

  componentDidMount() {
    this.addHistory()
  }

  // React hook; works like componentDidMount
  // useEffect(() => {
  //   addHistory()
  // })

  addHistory = () => {
    const { filmDecision } = this.props
    let newHistory = {
      film_id: filmDecision.id,
      title: filmDecision.title,
      overview: filmDecision.overview,
      vote_average: filmDecision.vote_average,
      release_date: filmDecision.release_date,
      comment: "Maybe remove comment column from history table?"
    }

    console.log("Added to History:", newHistory)

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
    const { filmDecision } = this.props
    console.log("addFavorite(history):",history)
    let newFavorite = {
      film_id: history.id,
      title: history.title,
      overview: history.overview,
      vote_average: history.vote_average,
      release_date: history.release_date,
      comment: "No comment yet"
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

  render() {
    const { filmDecision, logged_in } = this.props
    return (
      <>
        <Jumbotron>
          <p style={{color: "#28A745"}}>Pika-chosen!</p>
          <h4 className="film-title">{filmDecision.title}</h4>
          <p className="my-2">{filmDecision.overview}</p>
          <hr className="my-2" />
          <p>Rating: {filmDecision.vote_average}/10</p>
          <p>Release date: {filmDecision.release_date}</p>
          {logged_in &&
            <p className="lead">
              <Button
                color="success"
                href="/user_favorites"
                onClick={() => this.addFavorite(filmDecision)}>Add to Favorite
              </Button>
            </p>
          }      
        </Jumbotron>
        {/* <img src={Pikachu3} className="pikachu2" /> */}
        <br/>
      </>
    );
  }
};

export default DecisionBox;
