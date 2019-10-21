import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const UpdateUserProfile = () => {
  const [ userInfo, setUserInfo ] = useState({
    age: '',
    gender: '',
    location: '',
    description: '',
    interests: '', 
  })

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

export default UpdateUserProfile;