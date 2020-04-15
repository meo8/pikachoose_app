import React, { Component } from "react"
import { Button } from "reactstrap";

class GenreButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genreList: [],
      selectedGenres: [],
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

  activeBtnColor = (genre) => {
    // checks to see if the genre passed through exists in selectedGenres
    // convert genre toString cause values in selectedGenres are strings
    if (this.state.selectedGenres.includes(genre.toString())) {
      return "#5a6268"
    } else {
      return ""
    }
  }

  userSelectGenre = (e) => {
    e.preventDefault()
    const { selectedGenres } = this.state
    let genre = e.target.value
    // makes a copy to manipulate then setState later
    let userSelection = selectedGenres
    // finds the index of the genre passed as argument
    const index = userSelection.indexOf(genre);
    // if indexOf returns -1, push that genre to the userSelection array
    if (index === -1) {
      userSelection.push(genre);
    }
    // removes the genre from the array if it's clicked on again
    else {
      userSelection.splice(index, 1);
    }

    this.setState({selectedGenres: userSelection})
    console.log("User Selected Genres:", selectedGenres)
  }

  resetUserSelection = (e) => {
    e.preventDefault()
    this.setState({selectedGenres: []})
    // setState is asynchronous so it doesn't necessarily updates instantaniously
    // setTimeout gives setState some time before it logs the state to the console
    setTimeout(() => console.log("User Selection Clears:", this.state.selectedGenres), 1000)
  }

  render() {
    // Genre API keys are "id" and "name"
    const { genreList, selectedGenres } = this.state

    return (
      <div className="genre-grid">
      {genreList.map(genre => {
        return (
          <Button
            key={genre.id}
            value={genre.id}
            className="genre-btn"
            style={{backgroundColor: this.activeBtnColor(genre.id)}}
            onClick={this.userSelectGenre}>{genre.name}
          </Button>
        )
      })}

        <Button
          className="genre-btn clear-submit-btn"
          onClick={this.resetUserSelection}>Clear</Button>
        <Button
          className="genre-btn clear-submit-btn"
          onClick={this.decisionFromGenreSelection}>Submit</Button>
      </div>
    )
  }
}

export default GenreButtons
