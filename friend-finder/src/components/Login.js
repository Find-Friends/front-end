import React from "react";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

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
      <div className="container">
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
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
            </Col>
          </Row>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
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
            </Col>
          </Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <Button color="success">Login</Button>
          </Col>
        </Form>
      </div>
    );
  }
}

export default Login;
