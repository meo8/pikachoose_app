import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from './components/Header'
import HistoryIndex from './pages/HistoryIndex.js'
import HistoryShow from './pages/HistoryShow.js'

class App extends Component {
  constructor(){
    super()
    this.state = {
      histories: [],
    }
  }

  componentDidMount(){
    this.getHistories()
  }

  getHistories = () => {
    fetch("http://localhost:3000/histories")
    .then((response)=>{
      if(response.status === 200){
        return(response.json())
      }
    })
    .then((histories)=> {
      this.setState({histories: histories})
    })
  }

  render () {
    const { logged_in, sign_in_path, sign_out_path } = this.props
    return (
      <>
        <Header logged_in={logged_in} sign_in_path={sign_in_path} sign_out_path={sign_out_path}/>
        <Router>
          <Route exact path ="/history/:id" render={ (props) => <HistoryShow {...props} histories={ this.state.histories }/> }/>
          <Route exact path ="/" render={ (props) => <HistoryIndex histories={ this.state.histories } /> } />
        </Router>
      </>
    );
  }
}

export default App
