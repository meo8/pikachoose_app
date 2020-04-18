import React, { Component } from 'react'
import { Jumbotron, Button, Badge } from 'reactstrap';
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
            <p className="poster-image">
              <img src={`http://image.tmdb.org/t/p/w342/${history.poster_path}`}
              />

              <Badge color="secondary">
                { history.vote_average * 10 }<span className="badge-percentage">%</span>
              </Badge>
            </p>
            <div id="film-overview">
              <h4 className="film-title">{history.title}</h4>
              <p className="lead summary">
                <small><strong>Summary:</strong></small><br />
                <small>{history.overview}</small>
              </p>
              <hr className="my-2" />
              <p className="lead">
                <small> Released on: {history.release_date}</small>
              </p>
            </div>
          </Jumbotron>

          <Button color="success" className="fav-btn" id="addmargin" href="/user_favorites"
          onClick={() => addFavorite(history)}>
          Add to Favorite</Button>

          <Button className="fav-btn" id="addmargin" href="/user_history">Back to History</Button>
      </div>
      }
      </>
    )
  }
}

export default HistoryShow
