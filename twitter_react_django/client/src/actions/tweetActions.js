import axios from "axios";
import * as actionTypes from "./actionTypes";

export const postTweetSuccess = data => {
  return {
    type: actionTypes.POST_TWEET_SUCCESS,
    tweet: data
  };
};

export const postTweetStart = () => {
  return {
    type: actionTypes.POST_TWEET_START
  };
};

export const getTweetStart = () => {
  return {
    type: actionTypes.GET_TWEETS_START
  };
};
export const getTweetSuccess = data => {
  return {
    type: actionTypes.GET_TWEETS_SUCCESS,
    tweets: data
  };
};

export const getDetailTweetStart = () => {
  return {
    type: actionTypes.GET_DETAIL_TWEET_START
  };
};
export const getDetailTweetSuccess = data => {
  return {
    type: actionTypes.GET_DETAIL_TWEET_SUCCESS,
    tweet: data
  };
};
export const deleteTweetStart = () => {
  return {
    type: actionTypes.DELETE_TWEET_START
  };
};

export const deleteTweetSuccess = data => {
  return {
    type: actionTypes.DELETE_TWEET_SUCCESS,
    data
  };
};
export const updateTweetSuccess = data => {
  return {
    type: actionTypes.UPDATE_TWEET_SUCCESS,
    tweet: data
  };
};

export const updateTweetStart = () => {
  return {
    type: actionTypes.UPDATE_TWEET_START
  };
};

export const postTweet = (tweet, token) => {
  return dispatch => {
    dispatch(postTweetStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.post(`http://127.0.0.1:8000/api/tweets/`, tweet).then(res => {
      console.log(res.data);
      dispatch(postTweetSuccess(res.data));
    });
  };
};

export const getTweets = (page, token) => {
  return dispatch => {
    dispatch(getTweetStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.get(`http://127.0.0.1:8000/api/tweets/?page=${page}`).then(res => {
      console.log(res.data);
      dispatch(getTweetSuccess(res.data));
    });
  };
};
export const getDetailTweet = (id, token) => {
  return dispatch => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    dispatch(getDetailTweetStart());
    axios.get(`http://127.0.0.1:8000/api/tweets/${id}`).then(res => {
      console.log("got detail tweet", res.data);
      dispatch(getDetailTweetSuccess(res.data));
    });
  };
};
export const deleteTweet = (id, token) => {
  return dispatch => {
    dispatch(deleteTweetStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios.delete(`http://127.0.0.1:8000/api/tweets/${id}`).then(res => {
      console.log("deleted", res.data);
      dispatch(deleteTweetSuccess(res.data));
    });
  };
};

export const updateTweet = (id, updateObj, token) => {
  return dispatch => {
    dispatch(updateTweetStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .put(`http://127.0.0.1:8000/api/tweets/${id}/`, updateObj)
      .then(res => {
        dispatch(updateTweetSuccess(res.data));
      })
      .catch(err => console.log(err));
  };
};
