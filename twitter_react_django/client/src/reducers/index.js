import { combineReducers } from "redux";
import authReducer from "./authReducer";
import tweetReducer from "./tweetReducer";

export default combineReducers({
  authReducer,
  tweetReducer
});
