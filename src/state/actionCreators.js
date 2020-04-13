import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";

export const login = (username, password) => (dispatch) => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post(`https://backend-v1.herokuapp.com/api/users/login`, {
      username: username,
      password: password,
    })
    .then((response) => {
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      return true;
    })
    .catch((error) => {
      dispatch({
        type: Login_FAILURE,
        payload: error.data,
      });
    });
};

export const addUser = (user) => (dispatch) => {
  dispatch({ type: REGISTRATION_START });
  axios
    .post(`https://backend-v1.herokuapp.com/api/users/register`, {
      username: username,
      password: password,
    })
    .then((response) => {
      console.log(response.data);
      dispatch({ type: REGISTRATION_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: REGISTRATION_FAILURE, payload: error.response });
    });
};

export const fetchItem = (getStuff) => (dispatch) => {
  dispatch({ type: FETCH_START });
  axiosWithAuth()
    .get(`/api/auth/posts`, getStuff)
    .then((response) => {
      console.log("fetched items", response);
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: FETCH_FAILURE, payload: error.response });
    });
};

export const deleteItem = (id) => (dispatch) => {
  dispatch({ type: DELETE_ITEM_START });
  axiosWithAuth()
    .delete(`/:user_id/posts/:post_id/instructions/:instruction_id`)
    .then((response) => {
      console.log(response.data.message);
      dispatch({ type: DELETE_ITEM_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: DELETE_ITEM_FAILURE, payload: error });
    });
};
