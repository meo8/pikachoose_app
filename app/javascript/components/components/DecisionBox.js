import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const DecisionBox = (props) => {
  const { film } = props

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{film.title}</h1>
        <p className="lead">{film.overview}</p>
        <hr className="my-2" />
        <p>Rating: {film.vote_average}/10</p>
        <p>Release date: {film.release_date}</p>
        <p className="lead">
          <Button color="primary">Bookmark</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default DecisionBox;
