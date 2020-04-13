import React, { Component } from "react"
import WatchButton from "../components/WatchButton"
import DecisionBox from "../components/DecisionBox"

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: null,
      filmDecision: {}
    }
  }

  retrieveFilmDecision = (decision) => {
    this.setState({filmDecision: decision})
    this.setState({display: "DecisionBox"})
  }

  renderWatchButton = () => {
    const { display } = this.state
    const { filmList } = this.props

    if (display === null) {
      return (
        <>
          <h1 id="attention-getter">Decision fatigue is a real thing. <br />What do you need help with today?</h1>

          <WatchButton
            sendFilmDecision={this.retrieveFilmDecision}
            filmList={filmList}
          />
        </>
      )
    }
  }

  renderDecisionBox = () => {
    const { display, filmDecision } = this.state

    if (display === "DecisionBox") {
      return <DecisionBox film={filmDecision} />
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
