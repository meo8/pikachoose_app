import React, { Component } from "react"
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from './components/Header'

class App extends Component {
  render () {
    const { logged_in, sign_in_path, sign_out_path } = this.props
    return (
      <>
        <Header logged_in={logged_in} sign_in_path={sign_in_path} sign_out_path={sign_out_path}/>
      </>
    );
  }
}

export default App
