import React, { Component } from 'react'
import {ListGroup, Button} from 'reactstrap';
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom"
import EditComment from './EditComment'


class HistoryShow extends Component {
    constructor(props){
        super(props)
        this.state = {
            display: 'first',
            historyId: null,
            historyAttrs: {},
            edit: false,
            comment: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)

      }


    // Edit methods
    componentDidUpdate(prevProps){
        if(prevProps.match.params.id != this.props.match.params.id){
          this.getHistories()
        }
      }

     //fetch history from show method
    getHistories(){
    }

    updateInputValue = (event) => {
        const newComment = event.target.value;
        this.setState({comment: newComment});
        console.log(newComment)
     }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(`/histories/${id}`, {
            method: 'PUT',
            body: JSON.stringify(this.state.comment),
          });
    }

    changeDisplay = () => {
    let { display } = this.state;
    this.setState({ display: display === 'first' ? 'second' : 'first' });
    }
      
    render() {
        let { display } = this.state;
        const {id} = this.props.match.params
        const history = this.props.histories.find((v) => v.id === parseInt(id))

    return (
        <>
        {history &&
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <div> 
                    <h4>{history.decision}</h4>
                    <small><strong>Type: </strong>{history.kind}</small>
                    <br/>
                    <small><strong>Link: </strong>{history.link}</small>
                    <br/>
                    <small><strong>Comment:</strong></small>
                    <div className='comment'>
                        {/* {this.renderInner(history.comment)} */}
                        {display === 'first' && 
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
                            </div>}
                        <span className='button' onClick={this.changeDisplay}>Edit</span>
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
