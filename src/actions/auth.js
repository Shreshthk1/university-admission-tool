import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  DELETE_SUCCESS,
  DELETE_FAIL,
  LOGOUT,
  SET_MESSAGE,
  REFRESH_TOKEN,
} from "./types";

import AuthService from "../services/auth_service";

// calls the signup method from auth_service to post to the API, and then dispatchs 
//different messages depending on the result.
//returns a Promise for the Component using them.
export const signup = (f_name, l_name, email, password) => (dispatch) => {
  return AuthService.signup(f_name, l_name, email, password).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

// calls the login method from auth_service to post to the API, and then dispatchs 
//different messages depending on the result.
//returns a Promise for the Component using them.
export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const deleteUser = (email) => (dispatch) => {
  return AuthService.deleteUser(email).then(
    (data) => {
      dispatch({
        type: DELETE_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: DELETE_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

// calls the logout method from auth_service to remove the token from localstorage, 
// dispatchs a logout message
export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
};

// Uses the Redux action REFRESH_TOKEN.
export const refreshToken = (accessToken) => (dispatch) => {
  dispatch({
    type: REFRESH_TOKEN,
    payload: accessToken,
  });
};
