import React, { Component } from 'react'

class EditComment extends Component{
    constructor(props){
        super(props)
        this.state = {
          historyId: null,
          historyAttrs: {},
          edit: false,
          comment: this.props.history.comment
        }
        this.handleSubmit = this.handleSubmit.bind(this)
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

     
    render() {
        const {id} = this.props.match.params
        const history = this.props.histories.find((v) => v.id === parseInt(id))
    return (
        <>
            <form role="form" onSubmit={this.handleSubmit} >
                <input type="text" defaultValue={this.state.comment} name="comment" placeholder="Add Comment Here" 
                onChange={this.updateInputValue.bind(this)}
                />
                <input type="submit" value="Submit" />
            </form>
        </>
    )
    }
}

export default EditComment