import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCH_USER = 'FETCH_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const DELETE_USER = 'DELETE_USER';

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



