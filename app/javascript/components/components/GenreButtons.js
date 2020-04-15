import React, { Component } from "react"
import { Button } from "reactstrap";
import Pikachu2 from "./pikachu2.png"


class GenreButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genreList: [],
      selectedGenres: []
    }
  }

  componentDidMount() {
    this.getGenreList()
  }

  getGenreList = () => {
    const apiKey = process.env.REACT_APP_KEY

    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      }
    })
    .then((genres) => {
      genres = genres.genres
      this.setState({genreList: genres})
    })
  }

  userSelectGenre = (e) => {
    e.preventDefault()
    const { selectedGenres } = this.state

    let userSelection = selectedGenres
    let genre = e.target.value

    if (userSelection.includes(genre) === false) {
      userSelection.push(genre)
      this.setState({selectedGenres: userSelection})
    }
    console.log("User Selected Genres:", selectedGenres)
  }

  decisionFromGenreSelection = () => {
    // call API with ID of genre
    // calling randomized movie from genre buttons
    const apiKey = process.env.REACT_APP_KEY
    const { selectedGenres } = this.state
    const { setDisplayToDecisionBox } = this.props

    if (selectedGenres.length !== 0) {
      let genreQuery = selectedGenres.join("&")

      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreQuery}`)
      .then((response) => {
        if(response.status === 200) {
          return response.json()
        }
      })
      .then((films) => {
        let randomNumber = Math.floor(Math.random() * films.results.length);
        let randomFilm = films.results[randomNumber]
        console.log("Genereated decision based on genre selection:", randomFilm);
        // setState of display to DecisionBox
        setDisplayToDecisionBox(randomFilm)
      })
    } else if (selectedGenres.length === 0) {
      console.log("User did not select any genre. Selected genre list is empty:", selectedGenres)
    }
  }

  resetUserSelection = (e) => {
    e.preventDefault()
    this.setState({selectedGenres: []})

    setTimeout(() => console.log("User Selection Clears:", this.state.selectedGenres), 1000)
  }

  render() {
    // Genre API keys are "id" and "name"
    const { genreList, selectedGenres } = this.state

    return (
      <div>
      <div className="genre-grid">
      {genreList.map(genre => {
        return (
          <Button
            key={genre.id}
            value={genre.id}
            className="genre-btn"
            onClick={this.userSelectGenre}>{genre.name}
          </Button>
        )
      })}
      <br/>
        <Button className="genre-btn clear-submit-btn" onClick={this.resetUserSelection}>
          Clear
        </Button>
        <Button className="genre-btn clear-submit-btn" onClick={this.decisionFromGenreSelection}>
          Submit
        </Button>
      </div>
      <br/>
        <img src={Pikachu2} className="pikachu"/>
        <br/>
        <br/>
        <br/>
        <p>Choose the genre you want (or none if you don't care).</p>
      </div>
    )
  }
}

export default GenreButtons
