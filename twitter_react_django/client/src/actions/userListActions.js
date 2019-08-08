import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getUserListStart = () => {
  return {
    type: actionTypes.GET_USERLIST_START
  };
};
export const getUserListSuccess = data => {
  return {
    type: actionTypes.GET_USERLIST_SUCCESS,
    users: data
  };
};

export const getUserList = token => {
  return dispatch => {
    dispatch(getUserListStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`http://127.0.0.1:8000/users/`).then(res => {
      dispatch(getUserListSuccess(res.data));
    });
  };
};
