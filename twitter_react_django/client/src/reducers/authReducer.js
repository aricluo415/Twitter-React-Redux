import {
  AUTH_START,
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_SUCCESS
} from "../actions/actionTypes";
import { updateObject } from "./updateObject";

const initialState = {
  isAuthenticated: null,
  token: null,
  error: null,
  loading: false
};
const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    isAuthenticated: true,
    token: action.token,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  console.log("authLogout");
  return updateObject(state, {
    isAuthenticated: false,
    token: null
  });
};

export default function(state = initialState, action) {
  switch (action.type) {
    case AUTH_START:
      return authStart(state, action);
    case AUTH_SUCCESS:
      return authSuccess(state, action);
    case AUTH_FAIL:
      return authFail(state, action);
    case AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
}
