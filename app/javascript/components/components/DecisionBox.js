import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const DecisionBox = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{props.film.title}</h1>
        <p className="lead">Cool, great movie plot here wowowowowoowowowowowo</p>
        <hr className="my-2" />
        <p>Note here when it's created?</p>
        <p className="lead">
          <Button color="primary">Bookmark</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default DecisionBox;
