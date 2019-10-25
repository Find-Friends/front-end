import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  ButtonGroup
} from "reactstrap";

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

  const handleFriendView = () => {
    console.log("friends is being clicked");
    props.history.push(`/friends/${props.match.params.id}`);
  };

  return (
    <>

      <h1>Users</h1>
      {/* <button onClick={handleClick}>Update Profile</button> */}
      {/* <button onClick={handleDelete}>Delete Profile</button> */}
      {/* <button onClick={handleFriendRequest}>View Friend Request</button> */}
      {/* <button onClick={handleFriendView}>View Friends</button> */}
      {props.loading && 
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      }

      <div>
        <Card body className="text-center">
          <h2>Prospective Friends</h2>
          {props.loading && <p>Loading.....</p>}
          <div>
            {props.users.map(user => {
              return (
                <div>
                  <CardHeader tag="h2">
                    {user.firstName} {user.lastName}
                  </CardHeader>

                  <h2>{user.age}</h2>
                  <h2>{user.description}</h2>
                  <Button color="success" onClick={() => clickHandler(user.id)}>
                    Add Friend
                  </Button>
                </div>
              );
            })}
          </div>
        </Card>
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
