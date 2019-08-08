import { updateObject } from "./updateObject";
import {
  GET_FOLLOWING_LIST_START,
  GET_FOLLOWING_LIST_SUCCESS,
  UPDATE_FOLLOW_START,
  UPDATE_FOLLOW_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  follows: [],
  loading: false
};
const getFollowingListStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};
const getFollowingListSucess = (state, action) => {
  console.log("reducer", action.follows);
  return updateObject(state, {
    loading: false,
    follows: action.follows.follows
  });
};
const updateFollowStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};
const updateFollowSuccess = (state, action) => {
  console.log(action.follows);
  return updateObject(state, {
    loading: false,
    follows: action.follows.follows
  });
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_FOLLOWING_LIST_START:
      return getFollowingListStart(state, action);
    case GET_FOLLOWING_LIST_SUCCESS:
      return getFollowingListSucess(state, action);
    case UPDATE_FOLLOW_START:
      return updateFollowStart(state, action);
    case UPDATE_FOLLOW_SUCCESS:
      return updateFollowSuccess(state, action);
    default:
      return state;
  }
}
