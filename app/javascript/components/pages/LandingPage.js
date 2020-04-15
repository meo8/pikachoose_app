import React, { Component } from "react"
import WatchButton from "../components/WatchButton"
import DecisionBox from "../components/DecisionBox"
import GenreButtons from "../components/GenreButtons"
import Pikachu1 from "./pikachu1.png"

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
          <h1 id="attention-getter">Stuck at home and don't know what to watch? <br />We got your back.</h1>

          <WatchButton
            filmDecision={filmDecision}
            setDisplayToGenreButtons={this.setDisplayToGenreButtons}
          />
          <img className="pikachu" src={Pikachu1}/>
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
