import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Tweet from "../components/Tweet";
import Follows from "../components/Follows";
import "../css/userprofile.css";
import * as actions from "../actions/userProfileActions";
import Hoc from "../hoc/hoc";
class UserProfile extends React.Component {
  state = {
    user: "",
    follows: [],
    tweets: []
  };

  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getUserProfile(
        this.props.match.params.username,
        this.props.token
      );
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.token !== this.props.token &&
      nextProps.token !== undefined &&
      nextProps.token !== null
    ) {
      this.props.getUserProfile(
        this.props.match.params.username,
        nextProps.token
      );
    }
  }

  render() {
    return (
      <Hoc>
        {this.props.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h2>{this.props.user}</h2>

            <div className="left">
              <h1>Tweets</h1>
              <Tweet data={this.props.tweets} />
            </div>
            <div className="right">
              <h1>Follows</h1>
              <Follows data={this.props.follows} />
            </div>
          </div>
        )}
      </Hoc>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    tweets: state.userProfileReducer.tweets,
    follows: state.userProfileReducer.follows,
    user: state.userProfileReducer.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: (username, token) =>
      dispatch(actions.getUserProfile(username, token))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfile)
);
