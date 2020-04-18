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
      poster_path: filmDecision.poster_path,
      backdrop_path: filmDecision.backdrop_path,
      original_language: filmDecision.original_language,
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
      <main id="decision-main">
        <p style={{color: "#28A745"}}>Pika-chosen! <img src={Pikachu3} className="pikachu3" /></p>

        <Jumbotron id="decision-page" >
          <p>
            <img src={`http://image.tmdb.org/t/p/w185/${filmDecision.poster_path}`} />
          </p>

          <section>
            <h4 className="film-title">{filmDecision.title}</h4>
            <p className="my-4 decision-summary">{filmDecision.overview}</p>
            <hr className="my-2" />
            <br />
            <p>Released on: {filmDecision.release_date}</p>

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
          </section>
        </Jumbotron>
      </main>
    );
  }
};

export default DecisionBox;
