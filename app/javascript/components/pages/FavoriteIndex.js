import React from "react"
import { Jumbotron, Button } from 'reactstrap';
import { Link } from "react-router-dom"

const FavoriteIndex = (props) => {
  return (
    <>
      <div>
        <h3 className="history-header"> My Favorites</h3>
        {props.favorites.map((favorite, index) => {
          return (
            <Jumbotron className="lead">
              <Link to={`/favorite/${favorite.id}`} ><h4 className="film-title"> {favorite.title}</h4></Link>

              <div className="film-info">
                <p>Realease date: {favorite.release_date}</p>
                <p>Summary: {favorite.overview}</p>
                <p>Notes: {favorite.comment}</p>
              </div>
              </Jumbotron>
          )
        })}
      </div>
    </>
  )
}
export default FavoriteIndex
