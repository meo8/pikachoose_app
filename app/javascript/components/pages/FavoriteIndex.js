import React from "react"
import { Jumbotron, Button } from 'reactstrap';
import { Link } from "react-router-dom"
import Pikachu from './pikachu4.gif'

const FavoriteIndex = (props) => {
  return (
    <>
      <div>
        <h3 className="history-header"> My Favorites</h3>
        {props.favorites.map((favorite, index) => {
          return (
            <Jumbotron className="lead" key={index}>
              <Link to={`/favorite/${favorite.id}`}>
                <h4 className="film-title">{favorite.title}</h4>
              </Link>
              <div className="film-info">
                <small>{favorite.overview}</small>
                <br/>
                <hr className="my-2" />
                <small>Released on: {favorite.release_date}</small>
                <br/>
                <small><strong>Comment: {favorite.comment}</strong></small>
              </div>
            </Jumbotron>
          )
        })}
      </div>
      {props.favorites===[] &&
        <div id="showpage">
          <img id="pikachu" src={Pikachu}></img>
          <br/>
          <p>You don't have any saved favorites yet!</p>
        </div>}
    </>
  )
}
export default FavoriteIndex
