import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "./InstrumentCard.css"

const InstrumentCard = props => {
  return (
    <div>
      <Card>
        {/*  350x250 for images if possible*/}
        <CardImg
          className="img-fluid"
          src={props.link}
          alt={`Beautiful image of a ${props.brand} ${props.instrument}`}
        />
        <CardBody>
          <CardTitle>
            {props.brand} {props.instrument}
          </CardTitle>
          <CardSubtitle>Hosted By: {props.school}</CardSubtitle>
          <CardText>Some quick details about the {props.instrument}.</CardText>
          <Button className="btn-block">{props.action}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default InstrumentCard;
