import React from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: '',
        password: ''
      }
    }
  }

  handleChange = event => {
    this.setState({
      credentials: {
        ...this.state.credentials,
      [event.target.name] : event.target.value 
      }
      
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.credentials);
    axiosWithAuth()
    .post('/api/auth/login', this.state.credentials)
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);

      })
      .catch(error => {
        console.log(error);
      })
  } 

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='username'
          placeholder='Username'
          value={this.state.credentials.username}
          onChange={this.handleChange}
        />
        <input 
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.credentials.password}
          onChange={this.handleChange}
        />
        <button>Login</button>
      </form>
    )
  }
}

export default Login;