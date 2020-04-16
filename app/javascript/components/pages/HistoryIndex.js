import React from "react"
import { Jumbotron, Button, Badge } from 'reactstrap';
import { Link } from "react-router-dom"

const HistoryIndex = (props) => {
  return (
    <>
      <h3 className="history-header">My History</h3>
      <p className="lead">Your previous 10 searches</p>
        {props.histories.map((history, index) => {
          return (
            <Jumbotron className="lead jumbotron-flex" key={index}>
              <p className="poster-image">
                <img src={`http://image.tmdb.org/t/p/w185/${history.poster_path}`} />
                <Badge color="secondary">{ history.vote_average * 10 }%</Badge>
              </p>

              <div>
                <Link to={`/history/${history.id}`} >
                  <h4 className="film-title">{history.title}</h4>
                </Link>

                <p className="film-overview">
                  <small>{history.overview}</small>
                </p>

                <hr className="my-2" />
                
                <p>
                  <small>Released on: {history.release_date}</small>
                </p>

                <Button
                  className="se_btns"
                  href="/user_favorites"
                  color="success"
                  onClick={() => props.addFavorite(history)}>
                  Add to favorites</Button>
              </div>
            </Jumbotron>
          )
        })}
    </>
  )
}
export default HistoryIndex
