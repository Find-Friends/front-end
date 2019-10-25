import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

import axiosWithAuth from "../utils/axiosWithAuth";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.credentials);
    axiosWithAuth()
      .post("/api/auth/login", this.state.credentials)
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        this.props.history.push(`/users/${response.data.id}`);
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="username">Username </Label>
          <Input
            id="username"
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="password">Password </Label>
          <Input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button color="success">Login</Button>
      </Form>
    );
  }
}

export default Login;
