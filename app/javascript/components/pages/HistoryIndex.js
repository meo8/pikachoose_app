import React from "react"
import { ListGroup } from "reactstrap"
import { Link } from "react-router-dom"

const HistoryIndex = (props) => {
  return (
    <>
      <div>
        <h3 className="history-header">History</h3>
        {props.histories.map((history, index) => {
          return (
            <ListGroup className="decision-box" key={ index }>
              <Link to={`/history/${history.id}`} ><h4 className="film-title"> {history.title}</h4></Link>

              <div className="film-info">
                {/* <small>favorited?: {history.is_favorite }  </small> */}
                <p>Realease date: {history.release_date}</p>
                <p>Summary: {history.overview}</p>
                <p>Notes: {history.comment}</p>
              </div>
            </ListGroup>
          )
        })}
      </div>
    </>
  )
}
export default HistoryIndex
