import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
  CardHeader
} from "reactstrap";

import {
  getFriendRequest,
  deleteFriendRequest,
  acceptFriendRequest
} from "../actions";

const FriendRequest = props => {
  useEffect(() => {
    props.getFriendRequest(props.match.params.id);
  }, []);

  const handleDelete = requestId => {
    props.deleteFriendRequest(props.match.params.id, requestId);
  };

  const handleAccept = requestId => {
    props.acceptFriendRequest(props.match.params.id, requestId);
  };

  return (
    <div>
      {(props.loading || !props.requests) && 
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      }
      {console.log(props)}
      {props.requests &&
        props.requests.map(request => {
          {
            console.log(request);
          }
          return (
            <>
              <div key={request.id}>
                <Card body className="text-center">
                  <CardHeader tag="h2">
                    {request.firstName} {request.lastName}
                  </CardHeader>
                  <CardBody>
                    <h2>{request.age}</h2>
                    <h2>{request.location}</h2>
                    <h2>{request.description}</h2>
                    <h2>{request.gender}</h2>
                    <Button
                      color="primary"
                      onClick={() => handleAccept(request.id)}
                    >
                      Accept Request
                    </Button>
                    <Button
                      color="danger"
                      onClick={() => handleDelete(request.id)}
                    >
                      Delete Request
                    </Button>
                  </CardBody>
                </Card>
              </div>
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
