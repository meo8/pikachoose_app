import React, { Component } from 'react'
import { ListGroup, Button } from 'reactstrap';
import { Link } from "react-router-dom"

class HistoryShow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false,
      histories: [],
    }
  }

  handleEdit = (history) => {
    const { editable } = this.state

    if (editable) {
      this.handleUpdate(history)
      console.log("handleEdit(history.comment)=", history.comment)
    }

    // editable switches in between 'false' and 'true'
    this.setState({editable: !editable})
  }

  handleUpdate = (history) => {
    // UPDATING the comment in this specific history
    history.comment = this.comment.value

    // fetch method gets specific history with the id in our back-end and UPDATES it
    fetch(`/histories/${history.id}`,
    {
      method: 'PUT',
      // put in the new history!!!!
      body: JSON.stringify({history: history}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
        response.json().then((response) => {
          this.updateHistory(history)
        })
      })
  }

  updateHistory = (history) => {
    // make a new list newHistories that has all the histories except the one we just updated
    let newHistories = this.props.histories.filter((value) => value.id !== history.id)

    // pushing new history into the newHistories array
    newHistories.push(history)
    console.log("newHistories", newHistories)

    this.setState({
      histories: newHistories
    })
  }


  render() {
    let { editable } = this.state;
    const { id } = this.props.match.params
    const history = this.props.histories.find((v) => v.id === parseInt(id))

    // let comment = editable ? <input type='text' ref={input => this.comment = input} defaultValue={history.comment}/> : <p>original comment</p>

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
              <small><strong>Type:</strong> {history.kind}</small>
              <br/>
              <small><strong>Link:</strong> <a href={history.link}>{history.link}</a></small>
              <br/>
              <div className='comment'>
                <small><strong>Comment:</strong></small>
                {editable === true &&
                  <input type='text' ref={input => this.comment = input} defaultValue={history.comment}/>
                }

                { editable === false &&
                  <p>{history.comment}</p>
                }
                <button onClick={() => this.handleEdit(history)}>{editable ? 'Submit' : 'Edit'}</button>
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
