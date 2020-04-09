import React from "react"
import PropTypes from "prop-types"

class EditHistory extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      historyId: null,
      historyAttrs: {},
      edit: false
    }
  }

  componentDidUpdate(prevProps){
    if(prevProps.match.params.id != this.props.match.params.id){
      this.getHistory()
    }
  }
  
  getHistory(){
    //fetch history from show method
  }
  
  render () {
        const history_path = this.props
        const histories = this.props
        console.log("histories", histories)

        return(
          <>
          { this.props.histories.map((history, index) => {
          return (
            <>
              <tr key={ index }>
                  {(this.state.editable == `${ history.id }`)?
                    <th scope="row">
                    <input type='text'
                      ref={input => this.street = input}
                      defaultValue={ history.street }/>
                    </th>:
                    <th scope="row">
                      <a href = {`/histories/${history.id}`}>{ history.street }</a>
                    </th>}
                  {(this.state.editable == `${ history.id }`)?
                    <td><input type='text'
                      ref={input => this.city = input}
                      defaultValue={ history.city }/></td>:
                    <td>{ history.city }</td>}
                  <td>
                  <button type="button" class="btn btn-info btn-sm"
                    onClick={() => this.handleEdit(`${ history.id }`)}>
                    {(this.state.editable == `${ history.id }`)? 'Submit' : 'Edit'}</button>
                  </td>
                </tr>
                { this.state.success && <Redirect to="/"/> }
            </>
            )
         }
        )}
        </>
        )
  }
}

export default EditHistory