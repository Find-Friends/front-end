import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllUsers } from '../actions';

const UserHome = props => {

  // const [users, setUsers] = useState([]);

  useEffect(() => {
    props.getAllUsers(props.match.params.id);
    // if(props.users) {
    //   setUsers(props.users);
    // }  
  }, [])

  return (
    <>
      <h1>Users</h1>
      {console.log(props.users)}
      {/* {props.users && <p>Users</p>} */}
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