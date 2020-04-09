import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const AnswerBox = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Movie Title Here</h1>
        <p className="lead">Cool, great movie plot here wowowowowoowowowowowo</p>
        <hr className="my-2" />
        <p>Note here when it's created?</p>
        <p className="lead">
          <Button color="primary">Bookmark</Button>
          <Button color="primary">Add Note</Button>
          <Button color="primary">Edit Note</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default AnswerBox;
