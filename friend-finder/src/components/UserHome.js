import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllUsers } from '../actions';

const UserHome = props => {

  useEffect(() => {
    props.getAllUsers(props.match.params.id);
  }, [])

  return (
    <>
      <h1>Users</h1>
      {props.loading && <p>Loading.....</p>}
      <div>
        {props.users.map(user => {
          {console.log(user)}
          return (
            <div>
              <h2>{user.firstName}</h2>
              <h2>{user.lastName}</h2>
              <h2>{user.age}</h2>
              <h2>{user.description}</h2>
            </div>
          )
        })}  
      </div>
      
    </>
  )


}

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state.userProfileReducer.users,
    loading: state.userProfileReducer.loading

  }
}

export default connect(mapStateToProps, {getAllUsers})(UserHome);