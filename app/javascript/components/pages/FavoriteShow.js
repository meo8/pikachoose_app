import React, { Component } from 'react'
import { useHistory } from 'react-router-dom';
import {Button, Jumbotron} from 'reactstrap'

class FavoriteShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      favorites: []
    }
  }

  handleEdit = (favorite) => {
    const { editable } = this.state

    if (editable) {
      this.handleUpdate(favorite)
      console.log("handleEdit(favorite.comment)=", favorite.comment)
    }

    // editable switches in between 'false' and 'true'
    this.setState({editable: !editable})
  }

  handleUpdate = (favorite) => {
    // UPDATING the comment in this specific favorite
    favorite.comment = this.comment.value

    // fetch method gets specific favorite with the id in our back-end and UPDATES it
    fetch(`/favorites/${favorite.id}`,
    {
      method: 'PUT',
      // put in the new favorite!!!!
      body: JSON.stringify({favorite: favorite}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        response.json().then((response) => {
          this.updateFavorite(favorite)
        })
      })
  }

  updateFavorite = (favorite) => {
    // make a new list newFavorites that has all the favorites except the one we just updated
    let newFavorites = this.props.favorites.filter((value) => value.id !== favorite.id)

    // pushing new favorite into the newFavorites array
    newFavorites.push(favorite)
    console.log("newFavorites", newFavorites)

    this.setState({
      favorites: newFavorites
    })
  }


  deleteFavorite = (history) => {

    // fetch method gets specific history with the id in our back-end and UPDATES it
    fetch(`/favorites/${ history.id }`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response =>
    response.json()
  )}


  render() {
    let { editable } = this.state;
    const { id } = this.props.match.params
    const favorite = this.props.favorites.find((v) => v.id === parseInt(id))

    console.log(favorite)

    return (
      <>
      {favorite &&
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <Jumbotron className="lead">
            <h4 className="film-title">{favorite.title}</h4>
            <small><strong></strong>{favorite.overview}</small>
            <br/>
            <hr className="my-2" />
            <small> Released on {favorite.release_date}</small>
            <br/>
              <small><strong>Comment: 
              {editable === true &&
                <input type='text' ref={input => this.comment = input} defaultValue= {favorite.comment}/>
              }
              { editable === false &&
                <span> {favorite.comment}</span>
              }
              </strong></small>
              <br/>
            </Jumbotron>
            <Button className="fav-btn" color="info" id="addmargin" onClick={() => this.handleEdit(favorite)}>{editable ? 'Submit Comment' : 'Edit Comment'}</Button>
            <Button className="fav-btn" id="addmargin" href="/user_favorites" color="danger" onClick={() => this.deleteFavorite(favorite)}>Delete Favorite</Button>
            <Button className="fav-btn" id="addmargin" href="/user_favorites">Back To Favorites</Button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
      }
      </>
    )
  }
}

export default FavoriteShow
