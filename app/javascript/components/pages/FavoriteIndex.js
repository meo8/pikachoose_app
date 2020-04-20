import React from "react"
import { Jumbotron, Button, Badge } from 'reactstrap';
import { Link } from "react-router-dom"
import Pikachu from './pikachu4.gif'

const FavoriteIndex = (props) => {
  return (
    <div id="favoriteindexpage">
      <h3 className="index-header">My Favorites</h3>
      <div id="index-page">
        {props.favorites.map((favorite, index) => {
          return (
            <Jumbotron id="index-page-jumbotron" className="lead" key={index}>
                <Link to={`/favorite/${favorite.id}`} >
                  <p className="poster-image">
                    <img src={`https://image.tmdb.org/t/p/w185/${favorite.poster_path}`}
                    />

                    <Badge color="secondary">
                      { favorite.vote_average * 10 }<span className="badge-percentage">%</span>
                    </Badge>
                  </p>
                </Link>

                <Button
                  className="fav-btn"
                  href="/user_favorites"
                  color="secondary"
                  onClick={() => props.deleteFavorite(favorite)}>
                  Remove Favorite</Button>
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
    </div>
  )
}

export default FavoriteIndex
