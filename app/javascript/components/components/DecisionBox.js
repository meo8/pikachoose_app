import React from "react";
import { Jumbotron, Button } from "reactstrap";

const DecisionBox = (props) => {
  const { film } = props

  return (
    <Jumbotron>
      <h1 className="display-4">{film.title}</h1>
      <p className="lead">{film.overview}</p>
      <hr className="my-2" />
      <p>Rating: {film.vote_average}/10</p>
      <p>Release date: {film.release_date}</p>
      <p className="lead">
        <Button color="success">Bookmark</Button>
      </p>
    </Jumbotron>
  );
};

export default DecisionBox;
