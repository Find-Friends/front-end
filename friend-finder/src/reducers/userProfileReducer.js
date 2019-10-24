import {
  FETCH_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_ALL_USERS,
  POST_FRIEND_REQUEST,
  GET_FRIEND_REQUEST
} from "../actions";

const initialState = {
  loading: false,

  user: {},
  error: null,
  users: [],
  requests: [],
  friends: []
};

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER: {
      const error = action.payload.error;
      const user = action.payload.user;
      const loading = action.payload.loading;
      if (user !== null) {
        return {
          ...state,
          user: user,
          loading: loading
        };
      } else if (error !== null) {
        return {
          ...state,
          error: error,
          loading: loading
        };
      } else {
        return {
          ...state,
          loading: loading
        };
      }
    }
    case GET_ALL_USERS: {
      const error = action.payload.error;
      const users = action.payload.users;
      const loading = action.payload.loading;
      if (users !== null) {
        return {
          ...state,
          users: users,
          loading: loading
        };
      } else if (error !== null) {
        return {
          ...state,
          error: error,
          loading: loading
        };
      } else {
        return {
          ...state,
          loading: loading
        };
      }
    }
    case UPDATE_USER: {
      const error = action.payload.error;
      const user = action.payload.user;
      const loading = action.payload.loading;
      if (user !== null) {
        return {
          ...state,
          user: user,
          loading: loading
        };
      } else if (error !== null) {
        return {
          ...state,
          error: error,
          loading: loading
        };
      } else {
        return {
          ...state,
          loading: loading
        };
      }
    }
    case DELETE_USER: {
      return {
        ...state,
        user: {},
        loading: false,
        error: action.payload.error
      };
    }
    case POST_FRIEND_REQUEST: {
    }
    default:
      return state;

    case GET_FRIEND_REQUEST: {
      const error = action.payload.error;
      const requests = action.payload.requests;
      const loading = action.payload.loading;
      if (requests !== null) {
        return {
          ...state,
          requests: requests,
          loading: loading
        };
      } else if (error !== null) {
        return {
          ...state,
          error: error,
          loading: loading
        };
      } else {
        return {
          ...state,
          loading: loading
        };
      }
    }
  }
};
