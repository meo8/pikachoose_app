import React, { Component } from "react"
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom"
import Header from "./components/Header"
import HistoryIndex from "./pages/HistoryIndex.js"
import HistoryShow from "./pages/HistoryShow.js"
import About from "./pages/About.js"
import LandingPage from "./pages/LandingPage.js"
import FavoriteIndex from "./pages/FavoriteIndex.js"
import FavoriteShow from "./pages/FavoriteShow.js"
import NotFoundPage from "./components/NotFoundPage.js"

class App extends Component {
  constructor() {
    super()
    this.state = {
      // filmList: [],
      histories: [],
      favorites: [],
      editable: null
    }
  }

  componentDidMount() {
    // this.getFilms()
    this.getHistories()
    this.getFavorites()
  }

  // generateRandomDecisionIndex = () => {
  //   const { filmList } = this.state
  //   // generate random number between 0 and filmList length
  //   let randomIndex = Math.floor(Math.random() * Math.floor(filmList.length))
  //   // retrieve random film from filmList
  //   let decision = filmList[randomIndex]
  //   // store the single record above to filmDecision
  //   return decision
  // }
  //
  // getFilms = () => {
  //   const apiKey = process.env.REACT_APP_KEY
  //
  //   fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
  //   .then((response) => {
  //     if (response.status === 200) {
  //       return response.json()
  //     }
  //   })
  //   .then((films) => {
  //     films = films.results
  //     this.setState({filmList: films})
  //     console.log("Entire Film List:", this.state.filmList)
  //
  //     // results come back empty if the state is deconstructed
  //     // const { filmList, filmDecision } = this.state
  //     // let decision = this.generateRandomDecisionIndex()
  //     // this.setState({filmDecision: decision})
  //     // console.log("Film Decision:", this.state.filmDecision)
  //   })
  // }

  getHistories = () => {
    fetch("/histories")
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
    })
    .then((histories) => {
      this.setState({histories: histories})
    })
  }

  getFavorites = () => {
    fetch("/favorites")
    .then((response) => {
      if (response.status === 200) {
        return response.json()
      }
    })
    .then((favorites) => {
      this.setState({favorites: favorites})
    })
  }

  addFavorite = (film) => {
    console.log("addFavorite(film):",film)
    let newFavorite = {
      film_id: film.id,
      title: film.title,
      overview: film.overview,
      vote_average: film.vote_average,
      release_date: film.release_date,
      poster_path: film.poster_path,
      backdrop_path: film.backdrop_path,
      comment: "No comments yet"
    }

    // fetch method gets specific film with the id in our back-end and UPDATES it
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

  deleteFavorite = (favorite) => {
    // fetch method gets specific favorite with the id in our back-end and UPDATES it
    fetch(`/favorites/${ favorite.id }`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => alert("successfully deleted"))
    .then((messages) => {console.log("Delete response:", messages);});
  }


  render() {
    const {
      logged_in,
      sign_in_path,
      sign_out_path,
      sign_up_path,
      edit_acct_path } = this.props

    const { histories, favorites } = this.state

    return (
      <Router>

        <Header
          logged_in={ logged_in }
          sign_in_path={ sign_in_path }
          sign_out_path={ sign_out_path }
          sign_up_path={ sign_up_path }
          edit_acct_path={ edit_acct_path }
        />

        <Switch>
          <Route
            path="/favorite/:id"
            render={ props => <FavoriteShow {...props} favorites={ favorites } deleteFavorite={this.deleteFavorite} />  }
          / >
          <Route
            path="/history/:id"
            render={ props => <HistoryShow {...props} addFavorite={this.addFavorite} histories={ histories } />  }
          />
          <Route
            path="/user_history"
            render={ props => <HistoryIndex addFavorite={this.addFavorite} histories={ histories } /> }
          />
          <Route
            path="/user_favorites"
            render={ props => <FavoriteIndex favorites={ favorites } deleteFavorite={this.deleteFavorite} /> }
          />
          <Route path="/about" component={ About } />
          <Route
          // remember to add "exact" for this route or else About page will also appear on the landing page
            exact path="/"
            render={ props => <LandingPage addFavorite={this.addFavorite} logged_in={logged_in} /> }
          />
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/home' component={LandingPage} />
          <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    )
  }
}

export default App
