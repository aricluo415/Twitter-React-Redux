import { combineReducers } from "redux";
import authReducer from "./authReducer";
import tweetReducer from "./tweetReducer";
import userProfileReducer from "./userProfileReducer";
import userListReducer from "./userListReducer";
import followReducer from "./followReducer";

export default combineReducers({
  authReducer,
  tweetReducer,
  userProfileReducer,
  userListReducer,
  followReducer
});
