import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 

import { getFriendRequestSent  } from '../actions';

const FriendRequestSent = props => {

  useEffect(() => {
    props.getFriendRequestSent(props.match.params.id);  
  }, [])

  return (
    <div>
    {props.loading && <p>Loading......</p>}
    {props.requestsSent && props.requestsSent.map(friend => {
      return (
          <div key={friend.id}>
          <h2>{friend.firstName} {friend.lastName}</h2>
          <h2>{friend.age}</h2>
          <h2>{friend.gender}</h2>
          <h2>{friend.location}</h2>
        </div>
      )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state);
  return {
    loading: state.userProfileReducer.loading,
    requestsSent: state.userProfileReducer.requestsSent
  }
}

export default connect(mapStateToProps, {getFriendRequestSent})(FriendRequestSent);