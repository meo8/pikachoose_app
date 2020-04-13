import React from "react";
import { Jumbotron, Button } from "reactstrap";

const DecisionBox = (props) => {
  const { filmDecision } = props

  return (
    <Jumbotron>
      <h1 className="display-4">{filmDecision.title}</h1>
      <p className="lead">{filmDecision.overview}</p>
      <hr className="my-2" />
      <p>Rating: {filmDecision.vote_average}/10</p>
      <p>Release date: {filmDecision.release_date}</p>
      <p className="lead"><Button color="success">Bookmark</Button></p>
    </Jumbotron>
  );
};

export default DecisionBox;
