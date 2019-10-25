import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, Col } from "reactstrap";
import { connect } from "react-redux";

import { postFriendRequest } from "../actions";

const FindFriends = props => {
  console.log(props);
  const [request, setRequest] = useState({
    message: "",
    email: ""
  });
  const handleChange = event => {
    setRequest({
      ...request,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const friendPath = props.location.pathname.split("/");
    const friendID = Number(friendPath[friendPath.length - 1]);
    props.postFriendRequest(request, props.match.params.id, friendID);
    props.history.push(`/users/${props.match.params.id}`);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email" sm={2}>
          Input your email
        </Label>
        <Col sm={10}>
          <Input
            id="email"
            type="text"
            name="email"
            placeholder="email"
            value={request.email}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Label for="message" sm={2}>
          Send a message:
        </Label>
        <Col sm={10}>
          <Input
            id="message"
            type="textarea"
            name="message"
            placeholder="messages"
            value={request.message}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <Col sm={10}>
        <Button color="success">Send Request</Button>
      </Col>
    </Form>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {};
};
export default connect(
  mapStateToProps,
  { postFriendRequest }
)(FindFriends);
