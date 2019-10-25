import React, { useState, useEffect } from "react";
import { Form, FormGroup, Label, Input, Button, Col, Row } from "reactstrap";
import { connect } from "react-redux";

import { fetchUser, updateUser } from "../actions/index";

const UpdateUserProfile = props => {
  // console.log('update user profile props', props);
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    location: "",
    description: "",
    interests: []
  });

  // useEffect(() => {
  //   if (props.user) {
  //     console.log(props.user);
  //     setUserInfo(props.user);
  //   } else {
  //     props.fetchUser(props.match.params.id);
  //   }
  // }, [props.user])
  // Instead of using two useEffects like below if we want to do it in a single useEffect it can be done like the above example.

  useEffect(() => {
    props.fetchUser(props.match.params.id);
  }, []);

  useEffect(() => {
    if (props.user) {
      setUserInfo(props.user);
    }
  }, [props.user]);

  const handleChange = event => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.updateUser(userInfo);
    props.history.push(`/users/${props.match.params.id}`);
  };

  return (
    <>
      {/* {console.log("user props is -------", props.user)} */}
      {/* {console.log('------user info-----', userInfo)} */}
      {/* {props.loading ? <p>Loading</p> : */}

      <Form onSubmit={handleSubmit}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                id="firstName"
                type="text"
                name="firstName"
                placeholder="First Name"
                value={userInfo.firstName}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                id="lastName"
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={userInfo.lastName || ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                id="age"
                type="text"
                name="age"
                placeholder="Age"
                value={userInfo.age || ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="gender">Gender</Label>
              <Input
                id="gender"
                type="text"
                name="gender"
                placeholder="Gender"
                value={userInfo.gender || ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="location">Location</Label>
              <Input
                id="location"
                type="text"
                name="location"
                placeholder="Location"
                value={userInfo.location || ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                id="description"
                type="text"
                name="description"
                placeholder="Description"
                value={userInfo.description || ""}
                onChange={handleChange}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="interests">Interests</Label>

          <Input
            id="interests"
            type="textarea"
            name="interests"
            placeholder="Interests"
            value={userInfo.interests || []}
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="success">Update Profile</Button>
      </Form>
      {/* } */}
    </>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    user: state.userProfileReducer.user,
    error: state.userProfileReducer.error,
    loading: state.userProfileReducer.loading
  };
};

export default connect(
  mapStateToProps,
  { fetchUser, updateUser }
)(UpdateUserProfile);
