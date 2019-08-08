import React from "react";
import { connect } from "react-redux";
import { List, Button } from "antd";
import { withRouter } from "react-router-dom";
import * as userListAction from "../actions/userListActions";
import * as followAction from "../actions/followActions";

class UserList extends React.Component {
  componentDidMount() {
    if (this.props.token !== null && this.props.token !== undefined) {
      this.props.getFollowingList(
        localStorage.getItem("user"),
        this.props.token
      );
      this.props.getUserList(this.props.token);
      this.setState({ follows: this.props.follows, users: this.props.users });
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.token !== this.props.token &&
      nextProps.token !== undefined &&
      nextProps.token !== null
    ) {
      this.props.getFollowingList(
        localStorage.getItem("user"),
        nextProps.token
      );
      this.props.getUserList(nextProps.token);
    }
  }
  followOrNot(user) {
    if (this.props.follows.some(e => e.id === user)) {
      return true;
    }
    return false;
  }
  handleUpdate = async (event, user, action) => {
    if (this.props.token !== null && this.props.token !== undefined) {
      const follows = {
        user: { username: localStorage.getItem("user") },
        follows: [user]
      };
      this.props.updateFollow(
        localStorage.getItem("user"),
        follows,
        this.props.token
      );
    }
  };
  render() {
    return (
      <div>
        {this.props.followLoading === true &&
        this.props.userLoading === true ? (
          <h1>Loading..</h1>
        ) : (
          <div>
            <List
              itemLayout="horizontal"
              dataSource={this.props.users}
              renderItem={item => (
                <a href={`/profile/${item.username}`}>
                  <List.Item>
                    <List.Item.Meta title={<p> {item.username}</p>} />
                    {this.followOrNot(item.id) ? (
                      <Button
                        onClick={event =>
                          this.handleUpdate(event, item, "unfollow")
                        }
                      >
                        Unfollow
                      </Button>
                    ) : (
                      <Button
                        onClick={event =>
                          this.handleUpdate(event, item, "follow")
                        }
                      >
                        Follow
                      </Button>
                    )}
                  </List.Item>
                </a>
              )}
            />
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    users: state.userListReducer.users,
    userLoading: state.userListReducer.loading,
    followLoading: state.followReducer.loading,
    follows: state.followReducer.follows
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUserList: token => dispatch(userListAction.getUserList(token)),
    getFollowingList: (username, token) =>
      dispatch(followAction.getFollowingList(username, token)),
    updateFollow: (username, follows, token) =>
      dispatch(followAction.updateFollow(username, follows, token))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserList)
);
