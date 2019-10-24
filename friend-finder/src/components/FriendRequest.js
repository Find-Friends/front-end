import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getFriendRequest, deleteFriendRequest, acceptFriendRequest } from "../actions";

const FriendRequest = props => {

  useEffect(() => {
    props.getFriendRequest(props.match.params.id);
  }, []);


  const handleDelete = (requestId) => {
    props.deleteFriendRequest(props.match.params.id, requestId);
  }

  const handleAccept = (requestId) => {
    props.acceptFriendRequest(props.match.params.id, requestId);

  }

  return (
    <div>
      {(props.loading || !props.requests) && <p>Loading...</p>}
      {console.log(props)}
      {props.requests && props.requests.map(request => {
        {console.log(request)}
        return (
          <>
            <h2>
              {request.firstName} {request.lastName}
            </h2>
            <h2>{request.age}</h2>
            <h2>{request.location}</h2>
            <h2>{request.description}</h2>
            <h2>{request.gender}</h2>
            <button onClick={() => handleAccept(request.id)}>Accept Request</button>
            <button onClick={() => handleDelete(request.id)}>Delete Request</button>
          </>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    requests: state.userProfileReducer.requests,
    error: state.userProfileReducer.error,
    loading: state.userProfileReducer.loading
  };
};

export default connect(
  mapStateToProps,
  { getFriendRequest, deleteFriendRequest, acceptFriendRequest }
)(FriendRequest);
