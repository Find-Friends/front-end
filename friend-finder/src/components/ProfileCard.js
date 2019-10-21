import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default function ProfileCard(props) {
    return (
      <div>
        <Card>
            <CardImg src={props.friend1.image} alt="Profile User image" />
            <CardBody>
            <CardTitle>{props.friend1.firstname}</CardTitle>
            <CardTitle>{props.friend1.lastname}</CardTitle>
            </CardBody>
        </Card>
      </div>
    )
  }