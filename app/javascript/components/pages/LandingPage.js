import React, { Component } from "react"
import { Button } from "reactstrap"

class LandingPage extends Component {
  render() {
  return (
    <>
      {this.props.renderWatchButton()}
      {this.props.renderDecisionBox()}

    </>
  )
}
}

export default LandingPage
