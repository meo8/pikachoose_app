import React from "react"
import { ListGroup } from "reactstrap"
import { Link } from "react-router-dom"

const HistoryIndex = (props) => {
  return (
    <>
      <h3 className="history-header">History</h3>
      <div className="history-box">
        {props.histories.map((history, index) => {
          return (
            <ListGroup className="decision-box" key={ index }>
              <Link to={`/history/${history.id}`} >
                <h4 className="film-title"> {history.title}</h4>
              </Link>

              <div className="film-info">
                {/* <small>favorited?: {history.is_favorite }  </small> */}
                <p><strong>Summary:</strong> {history.overview}</p>
                <p><strong>Realease date:</strong> {history.release_date}</p>
                <p><strong>Notes:</strong> {history.comment}</p>
              </div>
            </ListGroup>
          )
        })}
      </div>
    </>
  )
}
export default HistoryIndex
