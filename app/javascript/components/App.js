import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Header from "./components/Header"
import WatchButton from "./components/WatchButton"
import DecisionBox from "./components/DecisionBox"
import HistoryIndex from "./pages/HistoryIndex.js"
import HistoryShow from "./pages/HistoryShow.js"
import About from "./pages/About.js"


class App extends Component {
  constructor() {
    super()
    this.state = {
      histories: [],
      filmList: [],
      filmDecision: {},
      error: null,
      editable: null,
      display: null
    }
  }

  componentDidMount() {
    this.getFilms()
    this.getHistories()
  }

  getFilms = () => {
    let apiKey = process.env.REACT_APP_KEY

    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then((response)=>{
      if (response.status === 200) {
        return response.json()
      }
    })
    .then((films) => {
      films = films.results
      this.setState({filmList: films})
      console.log("Entire Film List:", this.state.filmList)
    })
  }

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

  retrieveFilmDecision = (decision) => {
    this.setState({filmDecision: decision})
    this.setState({display: "DecisionBox"})
  }

  renderWatchButton = () => {
    const { display, filmList } = this.state

    if (display === null) {
      return (
        <>
          <h1 id="attention-getter">Decision fatigue is a real thing. <br />What do you need help with today?</h1>

          <WatchButton
          sendFilmDecision={this.retrieveFilmDecision}
          filmList={filmList}
          />
        </>
      )
    }
  }

  renderDecisionBox = () => {
    const { display, filmDecision } = this.state

    if (display === "DecisionBox") {
      return <DecisionBox film={filmDecision} />
    }
  }

  render() {
    const {
      logged_in,
      sign_in_path,
      sign_out_path,
      sign_up_path,
      edit_acct_path } = this.props

    const { histories, filmList, display } = this.state

    return (
      <>
        <Header
          logged_in={ logged_in }
          sign_in_path={ sign_in_path }
          sign_out_path={ sign_out_path }
          sign_up_path={ sign_up_path }
          edit_acct_path={ edit_acct_path }
        />

        {this.renderWatchButton()}
        {this.renderDecisionBox()}

        <Router>
          <Route
            path ="/history/:id"
            render={ props => <HistoryShow {...props} histories={ histories } />  }
          />
          <Route
            path ="/user_history"
            render={ props => <HistoryIndex histories={ histories } /> }
          />
          <Route path="/about" component= { About } />
        </Router>
      </>
    );
  }
}

export default App
