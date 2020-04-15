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
            <Jumbotron className="lead" key={index}>
              <Link to={`/favorite/${favorite.id}`}>
                <h4 className="film-title"> {favorite.title}</h4>
              </Link>

              <div className="film-info">
                <p>{favorite.overview}</p>
                <p>Realeased on: {favorite.release_date}</p>
                <p>Comment: {favorite.comment}</p>
              </div>
            </Jumbotron>
          )
        })}
      </div>
    </>
  )
}
export default FavoriteIndex
