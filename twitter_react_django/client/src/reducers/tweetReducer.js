import {
  GET_TWEETS_START,
  GET_TWEETS_SUCCESS,
  GET_DETAIL_TWEET_START,
  GET_DETAIL_TWEET_SUCCESS,
  DELETE_TWEET_SUCCESS,
  DELETE_TWEET_START,
  UPDATE_TWEET_SUCCESS,
  UPDATE_TWEET_START,
  POST_TWEET_SUCCESS,
  POST_TWEET_START
} from "../actions/actionTypes";
import { updateObject } from "./updateObject";

const initialState = {
  tweets: {},
  count: 0,
  range: 0,
  loading: false,
  author: ""
};

const getTweetSuccess = (state, action) => {
  return updateObject(state, {
    tweets: action.tweets,
    count: action.tweets.count,
    range: action.tweets.results.length,
    loading: false
  });
};
const getTweetStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const getDetailTweetStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const getDetailTweetSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    tweets: action.tweet,
    author: action.tweet.author
  });
};
const deleteTweetStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const deleteTweetSuccess = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};
const updateTweetStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const updateTweetSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    tweets: action.tweet,
    author: action.tweet.author
  });
};
const postTweetStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};

const postTweetSuccess = (state, action) => {
  return updateObject(state, {
    loading: false
  });
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TWEETS_START:
      return getTweetStart(state, action);
    case GET_TWEETS_SUCCESS:
      return getTweetSuccess(state, action);
    case GET_DETAIL_TWEET_START:
      return getDetailTweetStart(state, action);
    case GET_DETAIL_TWEET_SUCCESS:
      return getDetailTweetSuccess(state, action);
    case DELETE_TWEET_START:
      return deleteTweetStart(state, action);
    case DELETE_TWEET_SUCCESS:
      return deleteTweetSuccess(state, action);
    case UPDATE_TWEET_START:
      return updateTweetStart(state, action);
    case UPDATE_TWEET_SUCCESS:
      return updateTweetSuccess(state, action);
    case POST_TWEET_START:
      return postTweetStart(state, action);
    case POST_TWEET_SUCCESS:
      return postTweetSuccess(state, action);
    default:
      return state;
  }
}
