import axiosWithAuth from "../utils/axiosWithAuth";

export const FETCH_USER = "FETCH_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const POST_FRIEND_REQUEST = " POST_FRIEND_REQUEST";
export const ACCEPT_FRIEND_REQUEST = "ACCEPT_FRIEND_REQUEST";
export const GET_FRIEND_REQUEST = "GET_FRIEND_REQUEST ";
export const DELETE_FRIEND_REQUEST = "DELETE_FRIEND_REQUEST ";
export const GET_FRIENDS = "GET_FRIENDS";

export const fetchUser = id => dispatch => {
  dispatch({
    type: FETCH_USER,
    payload: {
      user: {},
      error: null,
      loading: true
    }
  });

  axiosWithAuth()
    .get(`/api/users/${id}`)
    .then(response => {
      dispatch({
        type: FETCH_USER,
        payload: {
          user: response.data,
          loading: false
        }
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: FETCH_USER,
        payload: {
          error: error.response,
          loading: false
        }
      });
    });
};

export const updateUser = userData => dispatch => {
  dispatch({
    type: UPDATE_USER,
    payload: {
      loading: true,
      user: {},
      error: null
    }
  });

  axiosWithAuth()
    .put(`/api/users/${userData.id}`, userData)
    .then(response => {
      dispatch({
        type: UPDATE_USER,
        payload: {
          user: response.data.user,
          loading: false
        }
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: UPDATE_USER,
        payload: {
          error: error.response,
          loading: false
        }
      });
    });
};

export const deleteUser = id => dispatch => {
  dispatch({
    type: DELETE_USER,
    payload: {
      error: false,
      user: {},
      loading: true
    }
  });
  axiosWithAuth()
    .delete(`/api/users/${id}`)
    .then(response => {
      console.log(response);
      dispatch({
        type: DELETE_USER,
        payload: {
          user: {},
          loading: false
        }
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: DELETE_USER,
        payload: {
          error: error.response,
          loading: false
        }
      });
    });
};

export const getAllUsers = id => dispatch => {
  dispatch({
    type: GET_ALL_USERS,
    payload: {
      error: null,
      users: [],
      loading: true
    }
  });
  axiosWithAuth()
    .get(`/api/users/${id}/potentialFriends`)
    .then(response => {
      // console.log(response);
      dispatch({
        type: GET_ALL_USERS,
        payload: {
          users: response.data.users,
          loading: false
        }
      });
    })
    .catch(error => {
      console.log(error.response);
      dispatch({
        type: GET_ALL_USERS,
        payload: {
          error: error.response,

          loading: false
        }
      });
    });
};

// export const userLogin = credentials => dispatch => {
//   dispatch({
//     type: USER_LOGIN,
//     payload: {
//       loading: true,
//       isLoggedIn: false
//     }
//   });
//   axiosWithAuth()
//     .post("/api/auth/login", credentials)
//     .then(response => {
//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

export const postFriendRequest = (postData, userID, friendID) => dispatch => {
  dispatch({
    type: POST_FRIEND_REQUEST,
    payload: {
      loading: true
    }
  });
  axiosWithAuth()
    .post(`/api/users/${userID}/${friendID}`, postData)
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log("this is an error", error);
    });
};

export const getFriendRequest = id => dispatch => {
  dispatch({
    type: GET_FRIEND_REQUEST,
    payload: {
      error: null,
      requests: [],
      loading: true
    }
  });
  axiosWithAuth()
    .get(`/api/users/${id}/requests`)
    .then(response => {
      console.log("-----get friend request response-------", response);
      dispatch({
        type: GET_FRIEND_REQUEST,
        payload: {
          requests: response.data.requests,
          loading: false
        }
      });
    })
    .catch(error => {
      console.log(error.response);
      dispatch({
        type: GET_FRIEND_REQUEST,
        payload: {
          error: error.response,
          loading: false,
          requests: []
        }
      });
    });
};

export const acceptFriendRequest = (userID, requestId) => dispatch => {
  dispatch({
    type: ACCEPT_FRIEND_REQUEST,
    payload: {
      loading: true
    }
  });
  axiosWithAuth()
    .put(`/api/users/${userID}/${requestId}`)
    .then(response => {
      console.log(response);
      dispatch({
        type: ACCEPT_FRIEND_REQUEST,
        payload: {
          loading: false,
          acceptFriendRequestId: requestId
        }
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: ACCEPT_FRIEND_REQUEST,
        payload: {
          loading: false
        }
      });
    });
};

export const deleteFriendRequest = (userId, requestId) => dispatch => {
  dispatch({
    type: DELETE_FRIEND_REQUEST,
    payload: {
      loading: true
    }
  });
  axiosWithAuth()
    .delete(`/api/users/${userId}/requests/${requestId}`)
    .then(response => {
      console.log(response);
      dispatch({
        type: DELETE_FRIEND_REQUEST,
        payload: {
          loading: false,
          deleteRequestId: requestId
        }
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: DELETE_FRIEND_REQUEST,
        payload: {
          loading: false
        }
      });
    });
};

export const getFriends = id => dispatch => {
  dispatch({
    type: GET_FRIENDS,
    payload: {
      loading: true
    }
  });
  axiosWithAuth()
    .get(`/api/users/${id}/friends`)
    .then(response => {
      console.log(response);
      dispatch({
        type: GET_FRIENDS,
        payload: {
          loading: false,
          friends: response.data.friends
        }
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: GET_FRIENDS,
        payload: {
          loading: false,
          error: error.response
        }
      });
    });
};
