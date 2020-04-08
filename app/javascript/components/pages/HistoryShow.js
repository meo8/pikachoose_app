import React, { Component } from 'react'
import {ListGroup, Button} from 'reactstrap';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"



class HistoryShow extends Component {
    render() {

        const {id} = this.props.match.params
        const history = this.props.histories.find((v) => v.id === parseInt(id))
        console.log(history)
    return (
        <>

        {history &&
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div id="middle">
                
                <div id= "box"> 
                    <h4>{history.decision}</h4>
                    <small><strong>Type: </strong>{history.kind}</small>
                    <br/>
                    <small><strong>Comments: </strong>{history.comments}</small>
                </div>
                <br/>
                
                <br/>
                <br/>
            </div>
            <div id="editanddelete">
                <br/>
                <br/>
                <Button>Edit</Button> &nbsp; &nbsp; 
                <Button>Delete</Button>
                <br/>
                <br/>
                <br/>
            </div>
            <br/>
            <br/>
            <br/>
        </div>
        

        }
        </>
    )
    }
}

export default HistoryShow
