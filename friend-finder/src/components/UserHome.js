import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAllUsers } from "../actions";
import axiosWithAuth from "../utils/axiosWithAuth";

const UserHome = props => {
  useEffect(() => {
    props.getAllUsers(props.match.params.id);
  }, []);
  const clickHandler = () => {
    console.log("this has been clicked");
    props.history.push(`/users/${props.match.params.id}/addFriend`);
  };
  return (
    <>
      <h1>Users</h1>
      {props.loading && <p>Loading.....</p>}
      <div>
        {props.users.map(user => {
          {
            console.log(user);
          }
          return (
            <div>
              <h2>{user.firstName}</h2>

              <h2>{user.lastName}</h2>
              <h2>{user.age}</h2>
              <h2>{user.description}</h2>
              <button onClick={clickHandler}>Add Friend</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    users: state.userProfileReducer.users,
    loading: state.userProfileReducer.loading
  };
};

export default connect(
  mapStateToProps,
  { getAllUsers }
)(UserHome);
