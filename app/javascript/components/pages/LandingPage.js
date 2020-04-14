import React, { Component } from "react"
import WatchButton from "../components/WatchButton"
import DecisionBox from "../components/DecisionBox"
import GenreButtons from "../components/GenreButtons"

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: null,
      filmDecision: []
    }
  }

  setDisplayToGenreButtons = () => {
    this.setState({display: "GenreButtons"})
  }

  setDisplayToDecisionBox = (decision) => {
    this.setState({filmDecision: decision})
    this.setState({display: "DecisionBox"})
  }

  renderWatchButton = () => {
    const { display, filmDecision } = this.state
    const { filmList } = this.props

    if (display === null) {
      return (
        <>
          <h1 id="attention-getter">Decision fatigue is a real thing. <br />What do you need help with today?</h1>

          <WatchButton
            filmDecision={filmDecision}
            setDisplayToGenreButtons={this.setDisplayToGenreButtons}
          />
        </>
      )
    }
  }

  renderGenreButtons = () => {
    const { display, filmDecision } = this.state

    if (display === "GenreButtons") {
      return <GenreButtons setDisplayToDecisionBox={this.setDisplayToDecisionBox} />
    }
  }

  renderDecisionBox = () => {
    const { display, filmDecision } = this.state

    if (display === "DecisionBox") {
      return <DecisionBox filmDecision={filmDecision} />
    }
  }

  render() {
    return (
      <>
        {this.renderWatchButton()}
        {this.renderGenreButtons()}
        {this.renderDecisionBox()}

      </>
    )
  }
}

export default LandingPage
