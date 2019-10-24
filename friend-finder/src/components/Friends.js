import React, { useEffect } from 'react';
import { connect } from 'react-redux'; 

import { getFriends } from '../actions';

const Friends = props => {

  useEffect(() => {
    props.getFriends(props.match.params.id);  
  }, [])

  return (
    <div>
    {props.loading && <p>Loading......</p>}
    {props.friends && props.friends.map(friend => {
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
    friends: state.userProfileReducer.friends
  }
}

export default connect(mapStateToProps, {getFriends})(Friends);