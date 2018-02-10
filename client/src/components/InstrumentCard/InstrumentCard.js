import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const InstrumentCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src="http://via.placeholder.com/350x250" alt="Card image cap" />
        <CardBody>
          <CardTitle>Instrument</CardTitle>
          <CardSubtitle>School name</CardSubtitle>
          <CardText>Some quick details about the instrument.</CardText>
          <Button>Request</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default InstrumentCard;