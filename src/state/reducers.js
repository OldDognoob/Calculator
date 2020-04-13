import axiosWithAuth from "../utils/axiosWithAuth";
import * as types from "../state/actionTypes";

// Registration application state
const initialState = {
  error: "",
  fetchingData: false,
  users: [],
  addUser: [],
  isLoadingLOGIN: false,
  successLOGIN: false,
  username: "",
  password: "",
  data: [],
};

// Create reducer function for each slice of state
export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTRATION_START:
      return {
        ...state,
        error: "",
        fetchingData: true,
      };
    case types.REGISTRATION_SUCCESS:
      return {
        ...state,
        addUser: action.payload,
        error: "",
        fetchingData: false,
        username: action.payload,
      };
    case types.REGISTRATION_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingData: false,
      };
    default:
      return state;
  }
};

//lOGIN Slice of state
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_START:
      return {
        ...state,
        isLoadingLOGIN: true,
        successLOGIN: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoadingLOGIN: false,
        successLOGIN: true,
        username: action.payload,
        password: action.payload,
      };
    case types.Login_FAILURE:
      return {
        ...state,
        isLoadingLOGIN: false,
        successLOGIN: false,
        username: "",
        password: "",
      };
    default:
      return state;
  }
};

//FETCHING Slice of state
export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_START:
      return {
        ...state,
        fetching: true,
      };
    case types.FETCH_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.payload,
      };
    case types.FETCH_FAILURE:
      return {
        ...state,
        fetching: false,
        data: action.payload,
      };
  }
};
