import React from "react";
import axios from "axios";
import { List } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../actions/followActions";
class FollowingList extends React.Component {
  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      this.props.getFollowingList(
        localStorage.getItem("user"),
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
      this.props.getFollowingList(
        localStorage.getItem("user"),
        nextProps.token
      );
    }
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <List
              itemLayout="horizontal"
              dataSource={this.props.follows}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta title={<p> {item.username}</p>} />
                </List.Item>
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
    follows: state.followReducer.follows,
    loading: state.followReducer.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getFollowingList: (username, token) =>
      dispatch(actions.getFollowingList(username, token))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(FollowingList)
);
