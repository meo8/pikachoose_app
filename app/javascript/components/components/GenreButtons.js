import React, { Component } from "react"
import { Button, Container } from "reactstrap"
// import Pikachu2 from "./pikachu2.gif"

class GenreButtons extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genreList: [],
      selectedGenres: [],
      total_pages: 500
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

  generateDecisionByGenre = (e) => {
    // e.persist() is used when you want to access event properties in an asynchronous way
    // removes the synthetic event from the pool and allow references to the event to be retained by user code
    // e.persist()
    const apiKey = process.env.REACT_APP_KEY
    const { selectedGenres } = this.state
    const { setDisplayToDecisionBox } = this.props
    let genreQuery = selectedGenres.join(",")

    if (selectedGenres.length !== 0 && e.target.value === "Submit") {
      fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreQuery}`)
      .then((response) => {
        if(response.status === 200) {
          return response.json()
        }
        })
      .then((films) => {
        let randomNumber = Math.floor(Math.random() * films.results.length);
        let randomFilm = films.results[randomNumber]
        console.log(randomFilm)
        setDisplayToDecisionBox(randomFilm)
      })
    }
  }

  generateDecisionBySurprise = () => {
    const apiKey = process.env.REACT_APP_KEY
    const { setDisplayToDecisionBox } = this.props
    const { total_pages } = this.state

    let randomPage = Math.ceil(Math.random() * total_pages);

    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${randomPage}`)
      .then((response) => {
        if(response.status === 200) {
          return response.json()
        }
      })
      .then((films) => {
        let randomNumber = Math.floor(Math.random() * films.results.length);
        let randomFilm = films.results[randomNumber]
        let pages = (+films.total_pages)
        this.setState({total_pages: pages})
        setDisplayToDecisionBox(randomFilm)
      })
  }

  activateBtnColor = (button) => {
    // checks to see if the button passed through exists in selectedGenres
    // convert button toString to match datatype in selectedGenres
    if (this.state.selectedGenres.includes(button.toString())) {
      return "#288745"
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
    // finds the index of the genre
    const index = userSelection.indexOf(genre);
    // if genre index is -1, push it to the userSelection array
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
      <div id="genre-page">
        <h5 className="lead">What genre(s) would you like?</h5>
        <div className="genre-grid">
        {genreList.map(genre => {
          return (
            <Button
              key={genre.id}
              value={genre.id}
              color="success"
              className="genre-btn"
              style={{backgroundColor: this.activateBtnColor(genre.id)}}
              onClick={this.userSelectGenre}>{genre.name}
            </Button>
          )
        })}
             <Button
                value="Clear"
                className="genre-btn functional-btn"
                color="danger"
                onClick={this.resetUserSelection}>Clear</Button>
          </div>

          <Button
            value="Surprise Me"
            color="warning"
            className="genre-btn functional-btn"
            onClick={this.generateDecisionBySurprise}>Surprise Me</Button>
          <Button
            value="Submit"
            className="genre-btn functional-btn"
            color="info"
            onClick={this.generateDecisionByGenre}>Submit</Button>
      </div>
    )
  }
}

export default GenreButtons
