import React, { useEffect } from "react";
import { connect } from "react-redux";

import axiosWithAuth from "../utils/axiosWithAuth";

import { getAllUsers, deleteUser } from "../actions";

const UserHome = props => {
  useEffect(() => {
    props.getAllUsers(props.match.params.id);
  }, []);
  const clickHandler = id => {
    console.log("this has been clicked");
    console.log(id);
    props.history.push(`/users/${props.match.params.id}/addFriend/${id}`);
  };

  const handleClick = () => {
    props.history.push(`/edit-profile/${props.match.params.id}`);
  };

  const handleDelete = () => {
    props.deleteUser(props.match.params.id);
    props.history.push("/signup");
  };
  const handleFriendRequest = () => {
    props.history.push(`/friend-request/${props.match.params.id}`);
  };

  return (
    <>
      <h1>Users</h1>
      <button onClick={handleClick}>Update Profile</button>
      <button onClick={handleDelete}>Delete Profile</button>
      <button onClick={handleFriendRequest}>View Friend Request</button>
      {props.loading && <p>Loading.....</p>}
      <div>
        {props.users.map(user => {
          return (
            <div>
              <h2>{user.firstName}</h2>

              <h2>{user.lastName}</h2>
              <h2>{user.age}</h2>
              <h2>{user.description}</h2>
              <button onClick={() => clickHandler(user.id)}>Add Friend</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    users: state.userProfileReducer.users,
    loading: state.userProfileReducer.loading
  };
};

export default connect(
  mapStateToProps,
  { getAllUsers, deleteUser }
)(UserHome);
