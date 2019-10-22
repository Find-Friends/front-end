import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/index'; 

const UpdateUserProfile = (props) => {
  // console.log('update user profile props', props);
  const [ userInfo, setUserInfo ] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    location: '',
    description: '',
    interests: [] 
  })

  useEffect(() => {
    props.fetchUser(props.match.params.id);
    if (props.user) {
      console.log(props.user);
      setUserInfo(props.user);
    }

  }, [props.fetchUser])
  

  const handleChange = event => {
    setUserInfo({
      ...userInfo,
      [event.target.name] : event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();



  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='firstName'>First Name</Label>
        <Input 
          id='firstName'
          type='text'
          name='firstName'
          placeholder='First Name'
          value={userInfo.firstName}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='lastName'>Last Name</Label>
        <Input 
          id='lastName'
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={userInfo.lastName}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='age'>Age</Label>
        <Input 
          id='age'
          type='number'
          name='age'
          placeholder='Age'
          value={userInfo.age}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='gender'>Gender</Label>
        <Input 
          id='gender'
          type='text'
          name='gender'
          placeholder='Gender'
          value={userInfo.gender}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='location'>Location</Label>
        <Input 
          id='location'
          type='text'
          name='location'
          placeholder='Location'
          value={userInfo.location}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='description'>Description</Label>
        <Input 
          id='description'
          type='text'
          name='description'
          placeholder='Description'
          value={userInfo.description}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for='interests'>Interests</Label>
        <Input 
          id='interests'
          type='text'
          name='interests'
          placeholder='Interests'
          value={userInfo.interests}
          onChange={handleChange}
        />
      </FormGroup>
      <Button>Update Profile</Button>
    </Form>
  )
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    user : state.userProfileReducer.user,
    error: state.userProfileReducer.error,
    loading: state.userProfileReducer.loading
  }
}

export default connect(mapStateToProps, {fetchUser})(UpdateUserProfile);