import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getFriendRequest } from "../actions";

const FriendRequest = props => {
  
  useEffect(() => {
    props.getFriendRequest(props.match.params.id);
  }, []);

  return (
    <div>
      {props.loading && <p>Loading...</p>}

      {props.requests.map(request => {
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
            <button>Accept Request</button>
            <button>Delete Request</button>
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
  { getFriendRequest }
)(FriendRequest);
