import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getFollowingListStart = () => {
  return {
    type: actionTypes.GET_FOLLOWING_LIST_START
  };
};
export const getFollowingListSuccess = data => {
  return {
    type: actionTypes.GET_FOLLOWING_LIST_SUCCESS,
    follows: data
  };
};

export const updateFollowStart = () => {
  return {
    type: actionTypes.UPDATE_FOLLOW_START
  };
};
export const updateFollowSuccess = data => {
  return {
    type: actionTypes.UPDATE_FOLLOW_SUCCESS,
    follows: data
  };
};

export const getFollowingList = (username, token) => {
  return dispatch => {
    dispatch(getFollowingListStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`http://127.0.0.1:8000/api/follows/${username}/`).then(res => {
      console.log("User List", res.data);
      dispatch(getFollowingListSuccess(res.data));
    });
  };
};
export const updateFollow = (username, follows, token) => {
  return dispatch => {
    dispatch(updateFollowStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .put(`http://127.0.0.1:8000/api/follows/${username}/`, follows)
      .then(res => {
        console.log("User List", res.data);
        dispatch(updateFollowSuccess(res.data));
      });
  };
};
