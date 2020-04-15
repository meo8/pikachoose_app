import React from "react"
import { Jumbotron, Button } from 'reactstrap';
import { Link } from "react-router-dom"

const HistoryIndex = (props) => {
  const addFavorite = (film) => {
    console.log("addFavorite(film):",film)
    let newFavorite = {
      film_id: film.id,
      title: film.title,
      overview: film.overview,
      vote_average: film.vote_average,
      release_date: film.release_date,
      comment: film.comment
    }

    // fetch method gets specific film with the id in our back-end and UPDATES it
    fetch("/favorites",
    {
      method: 'POST',
      body: JSON.stringify(newFavorite),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log("newFavorite:", JSON.stringify(newFavorite))
  }

  return (
    <>
      <h3 className="history-header">My History</h3>
      <p className="lead">Your previous 10 searches</p>
        {props.histories.map((history, index) => {
          return (
            <Jumbotron className="lead" key={index}>
              <Link to={`/history/${history.id}`} >
                <h4 className="film-title"> {history.title}</h4>
              </Link>
              <p>{history.overview}</p>
              <p>Release date: {history.release_date}</p>
              <Button
                className="se_btns"
                href="/user_favorites"
                onClick={() => addFavorite(history)}>
                Add to favorites</Button>
            </Jumbotron>

          )
        })}
    </>
  )
}
export default HistoryIndex
