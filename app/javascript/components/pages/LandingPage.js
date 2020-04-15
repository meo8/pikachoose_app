import React, { Component } from "react"
import WatchButton from "../components/WatchButton"
import DecisionBox from "../components/DecisionBox"
import GenreButtons from "../components/GenreButtons"
import Pikachu1 from "./pikachu1.gif"

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
        <div id="landingpage">
          <img className="pikachu" src={Pikachu1}/>
          <br/>
          <h2 id="attention-getter">Bored and don't know what to watch? <br />We got your back.</h2> <br/>
          <WatchButton
            filmDecision={filmDecision}
            setDisplayToGenreButtons={this.setDisplayToGenreButtons}
          />
        </div>
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
    const { logged_in, sign_up_path } = this.props

    if (display === "DecisionBox") {
      return <DecisionBox
        logged_in={logged_in}
        sign_up_path={sign_up_path}
        filmDecision={filmDecision} />
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
