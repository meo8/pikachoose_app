import React from "react"
import { Jumbotron, Button, Badge } from 'reactstrap';
import { Link } from "react-router-dom"
import Pikachu from './pikachu4.gif'

const FavoriteIndex = (props) => {
  return (
    <>
      <h3 className="index-header">My Favorites</h3>
      <div id="index-page">
        {props.favorites.map((favorite, index) => {
          return (
            <Jumbotron id="index-page-jumbotron" className="lead" key={index}>
                <Link to={`/favorite/${favorite.id}`} >
                  <p className="poster-image">
                    <img src={`http://image.tmdb.org/t/p/w185/${favorite.poster_path}`}
                    />

                    <Badge color="secondary">
                      { favorite.vote_average * 10 }<span className="badge-percentage">%</span>
                    </Badge>
                  </p>
                </Link>

                <Button
                  className="fav-btn"
                  href="/user_favorites"
                  color="success"
                  onClick={() => props.addFavorite(favorite)}>
                  Add to Favorites</Button>
            </Jumbotron>
          )
        })}
      </div>

      {props.favorites.length === 0 &&
        <div id="showpage">
          <img id="pikachu" src={Pikachu}></img>
          <br/>
          <p>You don't have any saved favorites yet!</p>
        </div>
      }
    </>
  )
}

export default FavoriteIndex
