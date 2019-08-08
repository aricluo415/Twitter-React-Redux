import { updateObject } from "./updateObject";
import {
  GET_USERPROFILE_START,
  GET_USERPROFILE_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  follows: [],
  tweets: [],
  user: "",
  loading: false
};
const getUserProfileStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};
const getUserProfileSucess = (state, action) => {
  return updateObject(state, {
    loading: false,
    follows: action.action.follows.follows,
    user: action.action.user.username,
    tweets: action.action.tweets
  });
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERPROFILE_START:
      return getUserProfileStart(state, action);
    case GET_USERPROFILE_SUCCESS:
      return getUserProfileSucess(state, action);
    default:
      return state;
  }
}
