import React, { Component } from "react"
import { Button } from "reactstrap";

class GenreIndex extends Component {
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

    console.log("Genre IDs:", selectedGenres)
  }

  render() {
    // Genre API keys are "id" and "name"
    const { genreList, selectedGenres } = this.state

    return (
      <div>
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
      <Button>Clear</Button>
      <Button>Submit</Button>
      </div>
    )
  }
}

export default GenreIndex
