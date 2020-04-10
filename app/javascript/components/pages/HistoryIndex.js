import React from "react"
import { ListGroup } from 'reactstrap'; 
import { Link } from "react-router-dom"

const HistoryIndex = (props) => {
  return (
    <>
      <div>
        <h3>Your Saved Films</h3>
        {props.histories.map((history, index) => {
          return (
            <ListGroup className="decisionbox" key={ index }>
              <Link to={`/history/${history.id}`} ><h4 id="name"> {history.decision }</h4></Link>
              <br/>
              <div>
                {/* <small>favorited?: {history.is_favorite }  </small> */}
                <br/>
                <small>link: {history.link}  </small>
                <br/>
                <small>type: {history.kind}  </small>
                <br/>
                <small>notes: {history.comment} </small>
              </div>
            </ListGroup>
          )
        })}
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  )
}
export default HistoryIndex
