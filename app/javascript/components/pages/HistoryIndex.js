import React, {Component} from "react"
import { ListGroup } from 'reactstrap'; 
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom"

class HistoryIndex extends Component{ 
    render(){
        return(
              <>
                <div>
                  <div >
                    {this.props.histories.map((history, index) => {
                      return(
                        <ListGroup id="box1" key={ index }>
                            <Link to={`/history/${history.id}`} ><h4 id= "name"> {history.decision }</h4></Link>
                            <br/>
                            <div>
                                <small>favorited?: {history.is_favorite }  </small>
                                <br/>
                                <small>link: {history.link }  </small>
                                <br/>
                                <small>type: {history.kind }  </small>
                                <br/>
                                <small>notes: {history.comment} </small>
                            </div>
                        </ListGroup>
                      )
                    })}
                  </div>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
              </>
        )
      }
}
export default HistoryIndex
