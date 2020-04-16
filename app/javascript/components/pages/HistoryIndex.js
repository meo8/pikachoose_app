import React from "react"
import { Jumbotron, Button, Badge } from 'reactstrap';
import { Link } from "react-router-dom"

const HistoryIndex = (props) => {
  return (
    <>
      <h3 className="index-header">My History</h3>
      <p className="lead">Your previous 10 searches</p>
      <div id="index-page">
        {props.histories.map((history, index) => {
          return (
            <Jumbotron id="index-page-jumbotron" className="lead" key={index}>
              <div>
                <Link to={`/history/${history.id}`} >
                  <p className="poster-image">
                    <img src={`http://image.tmdb.org/t/p/w185/${history.poster_path}`}
                    />

                    <Badge color="secondary">
                      { history.vote_average * 10 }%
                    </Badge>
                  </p>
                </Link>

                <Button
                  className="fav-btn"
                  href="/user_favorites"
                  color="success"
                  onClick={() => props.addFavorite(history)}>
                  Add to Favorites</Button>
              </div>
            </Jumbotron>
          )
        })}
      </div>
    </>
  )
}
export default HistoryIndex
