import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { Link } from "react-router-dom"


class HistoryShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // editable: false,
      histories: []
    }
  }

  // handleEdit = (history) => {
  //   const { editable } = this.state
  //
  //   if (editable) {
  //     this.handleUpdate(history)
  //   }
  //   // editable switches in between 'false' and 'true'
  //   this.setState({editable: !editable})
  // }

  // handleUpdate = (history) => {
  //   // UPDATING the comment in this specific history
  //   history.comment = this.comment.value
  //
  //   // fetch method gets specific history with the id in our back-end and UPDATES it
  //   fetch(`/histories/${history.id}`,
  //   {
  //     method: 'PUT',
  //     // put in the new history!!!!
  //     body: JSON.stringify({history: history}),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }).then((response) => {
  //       response.json().then((response) => {
  //         this.updateHistory(history)
  //       })
  //     })
  // }
  //
  // updateHistory = (history) => {
  //   // make a new list newHistories that has all the histories except the one we just updated
  //   let newHistories = this.props.histories.filter((value) => value.id !== history.id)
  //
  //   // pushing new history into the newHistories array
  //   newHistories.push(history)
  //   console.log("newHistories", newHistories)
  //
  //   this.setState({
  //     histories: newHistories
  //   })
  // }

  render() {
    // let { editable } = this.state;
    const { id } = this.props.match.params
    const { addFavorite } = this.props
    const history = this.props.histories.find((v) => v.id === parseInt(id))

    return (
      <>
        {history &&
        <div id="show-page">
          <Jumbotron id="lead">
            <h4 className="film-title">{history.title}</h4>
            <p className="lead"><small>{history.overview}</small></p>
            <hr className="my-2" />
            <div className="lead">            
              <small> Released on: {history.release_date}</small>
              <br/>
              <small>Original language: {history.original_language}</small>
            </div>
          </Jumbotron>

          <Button color="success" className="fav-btn" id="addmargin" href="/user_favorites"
          onClick={() => addFavorite(history)}>
          Add to Favorites</Button>
          
          <Button className="fav-btn" id="addmargin" href="/user_history">Back to History</Button>
      </div>
      }
      </>
    )
  }
}

export default HistoryShow
