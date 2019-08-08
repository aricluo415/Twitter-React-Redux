import { updateObject } from "./updateObject";
import {
  GET_USERLIST_START,
  GET_USERLIST_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  users: [],
  loading: false
};
const getUserListStart = (state, action) => {
  return updateObject(state, {
    loading: true
  });
};
const getUserListSucess = (state, action) => {
  return updateObject(state, {
    loading: false,
    users: action.users
  });
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERLIST_START:
      return getUserListStart(state, action);
    case GET_USERLIST_SUCCESS:
      return getUserListSucess(state, action);
    default:
      return state;
  }
}
