import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Card, CardHeader, Button, CardTitle, CardText } from "reactstrap";

import { getFriends } from "../actions";

const Friends = props => {
  useEffect(() => {
    props.getFriends(props.match.params.id);
  }, []);

  return (
    <div>
      {props.loading && 
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
      {props.friends &&
        props.friends.map(friend => {
          return (
            <Card body className="text-center">
              <CardHeader tag="h2">
                {friend.firstName} {friend.lastName}
              </CardHeader>
              <div key={friend.id}>
                <h2>{friend.age}</h2>
                <h2>{friend.gender}</h2>
                <h2>{friend.location}</h2>
              </div>
            </Card>
          );
        })}
    </div>
  );
};

const mapStateToProps = state => {
  // console.log(state);
  return {
    loading: state.userProfileReducer.loading,
    friends: state.userProfileReducer.friends
  };
};

export default connect(
  mapStateToProps,
  { getFriends }
)(Friends);
