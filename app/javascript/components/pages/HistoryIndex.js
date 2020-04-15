import React from "react"
import { Jumbotron, Button } from 'reactstrap';
import { Link } from "react-router-dom"

const HistoryIndex = (props) => {
  return (
    <>
      <h3 className="history-header">History</h3>
        {props.histories.map((history, index) => {
          return (
            // <Card  body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="decision-box" key={ index }>
            <Jumbotron className="lead">
              <Link to={`/history/${history.id}`} >
                <h4 className="film-title"> {history.title}</h4>
              </Link>
                {/* <Button color="secondary">Button</Button> */}
                <p>{history.overview}</p>
                <p>{history.release_date}</p>
                <p>{history.comment}</p>
            </Jumbotron>

          )
        })}
    </>
  )
}
export default HistoryIndex
