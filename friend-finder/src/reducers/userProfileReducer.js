import { FETCH_USER, UPDATE_USER, DELETE_USER } from '../actions';

const initialState = {
  loading: false,
  user: null,
  error: null
}

export const userProfileReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USER: {
      const error = action.payload.error;
      const user = action.payload.user;
      const loading = action.payload.loading;
      if (user !== null) {
        return {
          ...state,
          user: user,
          loading: loading
        }
      } else if (error !== null) {
        return {
          ...state,
          error: error,
          loading: loading
        }
      } else {
        return {
          ...state,
          loading: loading
        }
      }
    }
    default: 
      return state;
  }
}