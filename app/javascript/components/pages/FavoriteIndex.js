import React from "react"
import { Jumbotron, Button, Badge } from 'reactstrap';
import { Link } from "react-router-dom"

const FavoriteIndex = (props) => {
  return (
    <>
      <div>
        <h3 className="history-header"> My Favorites</h3>
        {props.favorites.map((favorite, index) => {
          return (
            <Jumbotron className="lead jumbotron-flex" key={index}>
              <p className="poster-image">
                <img src={`http://image.tmdb.org/t/p/w185/${favorite.poster_path}`} />
                <Badge color="secondary">{ favorite.vote_average * 10 }%</Badge>
              </p>

              <div>
                <Link to={`/favorite/${favorite.id}`}>
                  <h4 className="film-title">{favorite.title}</h4>
                </Link>
                <div className="film-info">
                  <p className="film-overview">
                    <small>{favorite.overview}</small>
                  </p>

                  <br/>
                  
                  <hr className="my-2" />

                  <small>Realeased on: {favorite.release_date}</small>
                  <br/>
                  <small>Comment: {favorite.comment}</small>
                </div>
              </div>
            </Jumbotron>
          )
        })}
      </div>
    </>
  )
}
export default FavoriteIndex
