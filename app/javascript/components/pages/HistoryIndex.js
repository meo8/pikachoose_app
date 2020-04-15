import React from "react"
import { Jumbotron, Button } from 'reactstrap';
import { Link } from "react-router-dom"

const HistoryIndex = (props) => {
  return (
    <>
      <h3 className="history-header">My History</h3>
      <p className="lead">Your previous 10 searches</p>
        {props.histories.map((history, index) => {
          return (
            // <Card  body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="decision-box" key={ index }>
            <Jumbotron className="lead" key={index}>
              <Link to={`/history/${history.id}`} >
                <h4 className="film-title"> {history.title}</h4>
              </Link>
              <p><small>{history.overview}</small></p>
              <hr className="my-2" />
              <p><small>Released on: {history.release_date}</small></p>
            </Jumbotron>

          )
        })}
    </>
  )
}
export default HistoryIndex
