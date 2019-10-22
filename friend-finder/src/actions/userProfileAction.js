import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_USER = 'FETCH_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';
export const GET_ALL_USERS = 'GET_ALL_USERS';

export const fetchUser = id => dispatch => {
  dispatch({type: FETCH_USER, payload: {
    user: null,
    error: null,
    loading: true
  }})
  axiosWithAuth()
  .get(`/api/users/${id}`)
    .then(response => {
      console.log(response);
      dispatch({type: FETCH_USER, payload: {
        user: response.data,
        loading: false
      }})
    })
    .catch(error => {
      console.log(error);
      dispatch({type: FETCH_USER, payload: {
        error: error.response,
        loading: false
      }})
    })
}

export const updateUser = userData => dispatch => {
  dispatch({type: UPDATE_USER, payload: {
    loading: true,
    user: null, 
    error: null
  }})
  axiosWithAuth()
  .put(`/api/users/${userData.id}`, userData)
    .then(response => {
      console.log(response);

    })
    .catch(error => {
      console.log(error);
    })

}

export const deleteUser = id => dispatch => {

}

export const getAllUsers = id => dispatch => {
  dispatch({type: GET_ALL_USERS, payload : {
    error: null,
    users: [],
    user: null,
    loading: true
  }})
  axiosWithAuth()
    .get(`/api/users/${id}/all`)  
      .then(response => {
        console.log(response);
        dispatch({type: GET_ALL_USERS, payload: {
          users: response.data.users,
          loading: false
        }})
      })
      .catch(error => {
        console.log(error.response);
        dispatch({type: GET_ALL_USERS, payload: {
          error: error.response,
          loading: false 
        }})
      })
}



