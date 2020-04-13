import React from "react"
import { ListGroup } from "reactstrap"
import { Link } from "react-router-dom"

const HistoryIndex = (props) => {
  return (
    <>
      <div>
        <h3 className="history-header">Your Bookmarks</h3>
        {props.histories.map((history, index) => {
          return (
            <ListGroup className="decision-box" key={ index }>
              <Link to={`/history/${history.id}`} ><h4 className="film-title"> {history.decision}</h4></Link>

              <div className="film-info">
                {/* <small>favorited?: {history.is_favorite }  </small> */}
                <p>link: <a href={history.link}>{history.link}</a></p>
                <p>type: {history.kind}</p>
                <p>notes: {history.comment}</p>
              </div>
            </ListGroup>
          )
        })}
      </div>
    </>
  )
}
export default HistoryIndex
