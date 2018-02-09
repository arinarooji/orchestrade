import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbo = (props) => {
  return (
    <div>
      <Jumbotron className="bg-dark text-white jumbotron-fluid">
        <div className="text-center">
          <h1 className="display-4">Orchestrade</h1>
          <p className="lead">A short slogan or motto here.</p>
          <hr className="my-2" />
          <p>Here is an optional paragraph element. This could be used to explain where the button below will take the user?</p>
          <p className="lead">
            <Button color="primary">Get Started</Button>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Jumbo;