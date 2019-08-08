import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getUserProfileStart = () => {
  return {
    type: actionTypes.GET_USERPROFILE_START
  };
};
export const getUserProfileSuccess = data => {
  return {
    type: actionTypes.GET_USERPROFILE_SUCCESS,
    action: data
  };
};

export const getUserProfile = (username, token) => {
  return dispatch => {
    dispatch(getUserProfileStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`http://127.0.0.1:8000/api/profile/${username}`).then(res => {
      dispatch(getUserProfileSuccess(res.data));
    });
  };
};
