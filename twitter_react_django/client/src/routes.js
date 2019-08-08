import React from "react";
import { Route } from "react-router-dom";
import Login from "./components/Login";
import TweetList from "./containers/TweetListView";
import TweetDetail from "./containers/TweetDetailView";
import Register from "./containers/Register";
import FollowingList from "./containers/FollowingListView";
import UserList from "./containers/UserListView";
import UserProfile from "./containers/UserProfile";
import Hoc from "./hoc/hoc";
const BaseRouter = () => (
  <Hoc>
    <Route exact path="/" component={TweetList} />{" "}
    <Route exact path="/profile/:username" component={UserProfile} />{" "}
    <Route exact path="/login/" component={Login} />{" "}
    <Route exact path="/register/" component={Register} />{" "}
    <Route exact path="/users/" component={UserList} />{" "}
    <Route exact path="/tweets/:tweetID" component={TweetDetail} />{" "}
    <Route exact path="/follows/:username" component={FollowingList} />{" "}
  </Hoc>
);

export default BaseRouter;
