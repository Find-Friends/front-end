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
        return (
          <h1>
            {request.firstName} {request.lastName}
          </h1>
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
