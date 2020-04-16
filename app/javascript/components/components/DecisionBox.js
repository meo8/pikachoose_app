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
      comment: "No comments yet"
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

  render() {
    const { filmDecision, logged_in, addFavorite } = this.props
    return (
      <>
        <Jumbotron id="decisionpage">
          <p style={{color: "#28A745"}}>Pika-chosen!</p>
          <h4 className="film-title">{filmDecision.title}</h4>
          <p className="my-2">{filmDecision.overview}</p>
          <hr className="my-2" />
          <p>Released on: {filmDecision.release_date}</p>
          {/* <p>Rating: {filmDecision.vote_average}/10</p> */}
          {logged_in &&
            <p className="lead">
              <Button
                // className="fav-btn"
                color="success"
                href="/user_favorites"
                onClick={() => addFavorite(filmDecision)}>Add to Favorite
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
