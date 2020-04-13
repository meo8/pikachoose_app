import React, { Component } from "react"
import WatchButton from "../components/WatchButton"
import DecisionBox from "../components/DecisionBox"

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: null
    }
  }

  setDisplayToDecisionBox = () => {
    this.setState({display: "DecisionBox"})
  }

  renderWatchButton = () => {
    const { display } = this.state
    const { filmList, filmDecision } = this.props

    if (display === null) {
      return (
        <>
          <h1 id="attention-getter">Decision fatigue is a real thing. <br />What do you need help with today?</h1>

          <WatchButton
            renderDecisionBox={this.setDisplayToDecisionBox}
            filmDecision={filmDecision}
          />
        </>
      )
    }
  }

  renderDecisionBox = () => {
    const { display } = this.state
    const { filmDecision } = this.props

    if (display === "DecisionBox") {
      return <DecisionBox filmDecision={filmDecision} />
    }
  }

  render() {
    return (
      <>
        {this.renderWatchButton()}
        {this.renderDecisionBox()}

      </>
    )
  }
}

export default LandingPage
