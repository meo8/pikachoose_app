import React, { Component } from "react"
import { Button } from "reactstrap";

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

  selectGenre = (e) => {
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

  decisionFromGenreSelection = (e) => {
    e.preventDefault()
    // call API with ID of genre
    // calling randomized movie from genre buttons
    const apiKey = process.env.REACT_APP_KEY
    // const { selectedGenres } = this.state
    const { setDisplayToDecisionBox } = this.props
    let genreQuery = this.state.selectedGenres.join("&")

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreQuery}`)
    .then((response) => {
      if(response.status === 200) {
        return response.json()
      }
    })
    .then((results) => {
      let randomNumber = Math.random()*results.results.length;
      let randomFilm = results.results[Math.floor(randomNumber)]
      console.log("Random film based on genre selection:", randomFilm);

      if (this.state.selectedGenres !== []) {
        setDisplayToDecisionBox(randomFilm)
      } else {
        console.log("Selected Genres is empty:", this.state.selectedGenres)
      }
    })
  }

  resetUserSelection = (e) => {
    e.preventDefault()
    this.setState({selectedGenres: []})
    console.log("User Selection Clears:", this.state.selectedGenres)
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
            onClick={this.selectGenre}>{genre.name}
          </Button>
        )
      })}
        <Button onClick={this.resetUserSelection}>
          Clear
        </Button>
        <Button onClick={this.decisionFromGenreSelection}>
          Submit
        </Button>
      </div>
    )
  }
}

export default GenreButtons
