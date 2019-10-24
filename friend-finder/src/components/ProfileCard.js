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

// Styling CSS
import "./Profile.css";

export default function ProfileCard(props) {
  return (
    <div className="FriendCard">
      <p>Friend</p>
      <Card>
        <CardImg src={props.friend1.image} alt="Profile User image" />
        <CardBody>
          <CardTitle>{props.friend1.firstname}</CardTitle>
          <CardTitle>{props.friend1.lastname}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}
