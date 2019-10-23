import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { connect } from "react-redux";

import { postFriendRequest } from "../actions";

const FindFriends = props => {
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
    props.postFriendRequest(request);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">email</Label>
        <Input
          id="email"
          type="text"
          name="email"
          placeholder="email"
          value={request.email}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="message">
          Send Message:<textarea></textarea>
        </Label>
      </FormGroup>
      <Button>Send Request</Button>
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
