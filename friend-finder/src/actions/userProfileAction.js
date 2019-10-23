import axiosWithAuth from "../utils/axiosWithAuth";


export const FETCH_USER = "FETCH_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const POST_FRIEND_REQUEST = " POST_FRIEND_REQUEST";

// export const fetchUser = id => dispatch => {
//   dispatch({
//     type: FETCH_USER,
//     payload: {
//       user: null,
//       error: null,
//       loading: true
//     }
//   });
// =======
export const FETCH_USER = 'FETCH_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const USER_LOGIN = 'USER_LOGIN';

export const fetchUser = id => dispatch => {
  dispatch({type: FETCH_USER, payload: {
    user: {},
    error: null,
    loading: true
  }})

  axiosWithAuth()
    .get(`/api/users/${id}`)
    .then(response => {

//       console.log(response);
//       dispatch({
//         type: FETCH_USER,
//         payload: {
//           user: response.data,
//           loading: false
//         }
//       });
// =======
      // console.log(response);
      dispatch({type: FETCH_USER, payload: {
        user: response.data,
        loading: false
      }})

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

//   dispatch({
//     type: UPDATE_USER,
//     payload: {
//       loading: true,
//       user: null,
//       error: null
//     }
//   });

  dispatch({type: UPDATE_USER, payload: {
    loading: true,
    user: {}, 
    error: null
  }})

  axiosWithAuth()
    .put(`/api/users/${userData.id}`, userData)
    .then(response => {

//       console.log(response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

// export const deleteUser = id => dispatch => {};

// export const getAllUsers = id => dispatch => {
//   dispatch({
//     type: GET_ALL_USERS,
//     payload: {
//       error: null,
//       users: [],
//       user: null,
//       loading: true
//     }
//   });
//   axiosWithAuth()
//     .get(`/api/users/${id}/all`)
//     .then(response => {
//       console.log(response);
//       dispatch({
//         type: GET_ALL_USERS,
//         payload: {

      // console.log(response);
      dispatch({type: UPDATE_USER, payload: {
        user: response.data.user,
        loading: false
      }})
    })
    .catch(error => {
      console.log(error);
      dispatch({type: UPDATE_USER, payload: {
        error: error.response,
        loading: false
      }})
    })
}

export const deleteUser = id => dispatch => {
  dispatch({type: DELETE_USER, payload: {
    error: false,
    user: {},
    loading: true
  }})
  axiosWithAuth()
  .delete(`/api/users/${id}`)
    .then(response => {
      console.log(response);
      dispatch({type: DELETE_USER, payload: {
        user: {},
        loading: false
      }})
    })
    .catch(error => {
      console.log(error);
      dispatch({type: DELETE_USER, payload: {
        error: error.response,
        loading: false
      }})
    })
}

export const getAllUsers = id => dispatch => {
  dispatch({type: GET_ALL_USERS, payload : {
    error: null,
    users: [],
    loading: true
  }})
  axiosWithAuth()
    .get(`/api/users/${id}/all`)  
      .then(response => {
        // console.log(response);
        dispatch({type: GET_ALL_USERS, payload: {

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
// <<<<<<< dm-addfriend
//           loading: false
//         }
//       });
//     });
// };
// =======
          loading: false 
        }})
      })
}

export const userLogin = credentials => dispatch => {
  dispatch({type: USER_LOGIN, payload: {
    loading: true,
    isLoggedIn: false
  }})
  axiosWithAuth()
  .post('/api/auth/login', credentials)
    .then(response => {
      console.log(response);
      
    })
    .catch(error => {
      console.log(error);
    })
}





export const postFriendRequest = postData => dispatch => {
  dispatch({
    type: POST_FRIEND_REQUEST,
    payload: {
      loading: true
    }
  });
  axiosWithAuth().post("/api/users/:id/:requestID");
};
