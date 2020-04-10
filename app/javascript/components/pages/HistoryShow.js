import React, { Component } from 'react'
import {ListGroup, Button} from 'reactstrap';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"
import EditComment from './EditComment'


class HistoryShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: 'first',
            editable: false,
            historystate: {},
            histories: []
 
        }
        // this.handleSubmit = this.handleSubmit.bind(this)

        this.handleEdit = this.handleEdit.bind(this)
        this.updateHistory = this.updateHistory.bind(this)

      }

    handleEdit(){
    if(this.state.editable){
        let comment = this.comment.value
        let id = this.state.historystate.id
        let history = {id: id, comment: comment}
        this.handleUpdate(history)
        console.log("handleEdit(this.state.historystate)=",this.state.historystate)
        console.log("handleEdit(history)=", history)
        }
    this.setState({
        editable: !this.state.editable
    })
    }

    handleUpdate(history){
        let comment = this.comment.value
        let id = this.state.historystate.id
        fetch(`/histories/${id}`, 
        {
          method: 'PUT',
          body: JSON.stringify({history: history}),
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((response) => { 
            this.updateHistory(history)
          })
      }
      updateHistory(history){
        let newHistories = this.props.histories.filter((f) => f.id !== history.id)
        newHistories.push(history)
        this.setState({
          histories: newHistories,
          historystate: history
        })
      }
    

    // changeDisplay = () => {
    // let { display } = this.state;
    // this.setState({ display: display === 'first' ? 'second' : 'first' });
    // }
      
    render() {

        let { display } = this.state;
        const {id} = this.props.match.params
        const history = this.props.histories.find((v) => v.id === parseInt(id))

        let comment = this.state.editable ? <input type='text' ref={input => this.comment = input} defaultValue={history.comment}/>:<p>original comment</p>

        console.log(history)
        

    return (
        <>
        {history &&
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <div className="decisionbox"> 
                    <h4>{history.decision}</h4>
                    <small><strong>Type: </strong>{history.kind}</small>
                    <br/>
                    <small><strong>Link: </strong>{history.link}</small>
                    <br/>
                    <small><strong>Comment:</strong></small>
                    <div className='comment'>
                        {/* {this.renderInner(history.comment)} */}
                        {/* {display === 'first' && 
                            <div> 
                                {history.comment}
                            </div>}
                        {display === 'second' &&
                            <div> 
                                <form role="form" onSubmit={this.handleSubmit} >
                                    <input type="text" defaultValue={this.state.comment} name="comment" placeholder="Add Comment Here" 
                                    onChange={this.updateInputValue.bind(this)}
                                    />
                                    <input type="submit" value="Submit" />
                                </form> 
                            </div>} */}
                        {/* <span className='button' onClick={this.changeDisplay}>Edit</span> */}
                        {comment}
                        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
                        {/* <span className='button' onClick={() => this.props.handleDelete(history.id)}>Delete</span> */}
                     </div>
                </div>
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
