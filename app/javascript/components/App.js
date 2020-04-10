import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Header from "./components/Header"
import WatchButton from "./components/WatchButton"
import DecisionBox from "./components/DecisionBox"
import HistoryIndex from "./pages/HistoryIndex.js"
import HistoryShow from "./pages/HistoryShow.js"
import mockMovielist from "./mockMovielist"
import About from "./pages/About.js"


class App extends Component {
  constructor() {
    super()
    this.state = {
      histories: [],
      watchList: [],
      watchAnswer: {},
      error: null,
      delete_success: false,
      editable: null,
      display: null,
    }
  }

  componentDidMount() {
    this.getHistories()
    this.getFilms()
  }

  getFilms = () => {
    let apiKey = process.env.REACT_APP_KEY
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
    .then((response)=>{
      if(response.status === 200){
        return(response.json())
      }
    })  
    .then((films)=> {
      this.setState({watchList: films})
      console.log(films)
    })
  }
  
  getHistories = () => {
    fetch("/histories")
    .then((response)=>{
      if(response.status === 200){
        return(response.json())
      }
    })
    .then((histories)=> {
      this.setState({histories: histories})
    })
  }

  retrieveFilmDecision = (decision) => {
    this.setState({watchAnswer: decision})
    this.setState({display: "DecisionBox"})
  }

  renderDecisionBox = () => {
    const { display } = this.state

    if (display === "DecisionBox") {
      return <DecisionBox film={this.state.watchAnswer} />
    }
  }

  render () {
    const {
      logged_in,
      sign_in_path,
      sign_out_path,
      sign_up_path } = this.props

    const { histories, watchList } = this.state

    

    return (
      <>
        <Header
          logged_in={logged_in}
          sign_in_path={sign_in_path}
          sign_out_path={sign_out_path}
          sign_up_path={sign_up_path}
        />

        <WatchButton
          sendFilmDecision={this.retrieveFilmDecision}
          watchList={watchList}
        />

        {this.renderDecisionBox()}

        <Router>
          <Route
            path ="/history/:id"
            render={ (props) => <HistoryShow {...props} histories={ histories } getHistories={this.getHistories} />  }/>
          <Route
            path ="/user_history"
            render={ (props) => <HistoryIndex histories={ histories } /> }
            />
          <Route path="/about" component= {About} />
        </Router>
      </>
    );
  }
}

export default App
