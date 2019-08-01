import React from "react";
import axios from "axios";
import { List } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class FollowingList extends React.Component {
  state = {
    following: []
  };
  fetchFollowing = () => {
    const username = this.props.match.params.username;
    axios.get(`http://127.0.0.1:8000/api/follows/${username}`).then(res => {
      this.setState({
        following: res.data.follows
      });
      console.log(res.data);
    });
  };
  componentDidMount() {
    this.fetchFollowing();
  }
  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: newProps.token
      };
      const username = this.props.match.params.username;
      axios.get(`http://127.0.0.1:8000/api/follows/${username}`).then(res => {
        this.setState({
          following: res.data.follows
        });
      });
    } else {
      console.log("no token");
      this.setState({
        following: []
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.token ? (
          <div>
            <List
              itemLayout="horizontal"
              dataSource={this.state.following}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta title={<p> {item.username}</p>} />
                </List.Item>
              )}
            />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.token
  };
};
export default withRouter(connect(mapStateToProps)(FollowingList));
