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
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Label for="email">Input your Email</Label>

          <Input
            id="email"
            type="text"
            name="email"
            placeholder="Email"
            value={request.email}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Label for="message">Send a Message</Label>

          <Input
            id="message"
            type="textarea"
            name="message"
            placeholder="Message"
            value={request.message}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
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
