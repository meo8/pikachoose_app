import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import Header from "./components/Header"
import WatchButton from "./components/WatchButton"
import AnswerBox from "./components/AnswerBox"
import HistoryIndex from "./pages/HistoryIndex.js"
import HistoryShow from "./pages/HistoryShow.js"
import EditHistory from "./pages/EditHistory.js"
import mockMovielist from "./mockMovielist"


class App extends Component {
  constructor(){
    super()
    this.state = {
      watchList: mockMovielist,
      histories: [],
      watchAnswer: {},
      error: null,
      delete_success: false,
      editable: null,
      display: null
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

  createHistory = (attrs) =>{
    return fetch("/histories", {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({histories: attrs})
    })
    .then(response => {
      if(response.status === 201){
        this.getHistories()
      }
    })
  }

  handleEdit = (id) => {
    if(this.state.editable == id){
      this.setState({ editable: null })
      let is_favorite = this.is_favorite.value
      let comment = this.comment.value
      let history = { is_favorite: is_favorite, comment: comment}
      this.handleUpdate(history, id)
    }else{
    this.setState({
      editable: id
    })}
  }

  handleUpdate = (history, id) => {
    fetch(`/histories/${id}`,
    {
      method: 'PUT',
      body: JSON.stringify({history: history}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        this.setState({ success: true })
        return this.props.getHistories()
      })
  }

  handleDelete = (id) => {
    fetch(`/histories/${id}`, {
      method: 'DELETE',
       headers: {
         'Content-Type': 'application/json'
         }
       }
     ).then((response) => {
       if(response.ok){
         alert("this entry is deleted")
         this.setState({ delete_success: true })
         return this.getHistories()
         console.log("delete attempt!")
       }
     })
    }

    retrieveWatchAnswer = (answer) => {
      this.setState({watchAnswer: answer})
      this.setState({display: "AnswerBox"})
    }

    renderAnswerBox = () => {
      const { display } = this.state

      if (display === "AnswerBox") {
        return <AnswerBox film={this.state.watchAnswer}/>
      }
    }

  render () {
    const {
      logged_in,
      sign_in_path,
      sign_out_path,
      sign_up_path } = this.props

    return (
      <>
        <Header
          logged_in={logged_in} sign_in_path={sign_in_path} sign_out_path={sign_out_path} sign_up_path={sign_up_path}
        />

        <WatchButton
          sendAnswer={this.retrieveWatchAnswer}
          watchList={this.state.watchList}
        />

        {this.renderAnswerBox()}

        <Router>
          <Route exact path ="/history/:id" render={ (props) => <HistoryShow {...props} histories={ this.state.histories }/> }/>
          <Route exact path ="/userhistory" render={ (props) => <HistoryIndex histories={ this.state.histories } getHistories={ this.getHistories}/> } />
          {/* <Route exact path="/histories/:id/edit"
                  render={ (props) => <EditHistory
                  histories={ this.state.histories }
                  getHistories={ this.getHistories }
          /> } /> */}
        </Router>
      </>
    );
  }
}

export default App
