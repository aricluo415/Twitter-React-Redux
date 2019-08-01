import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { List, Button } from "antd";
import { withRouter } from "react-router-dom";

class UserList extends React.Component {
  state = {
    users: [],
    following: []
  };
  fetchUsers = () => {
    axios.get("http://127.0.0.1:8000/users/").then(res => {
      this.setState({
        users: res.data
      });
      console.log(res.data);
    });
  };
  fetchFollowing = () => {
    axios
      .get(`http://127.0.0.1:8000/api/follows/${localStorage.getItem("user")}`)
      .then(res => {
        this.setState({
          following: res.data.follows
        });
        console.log(res.data.follows);
      });
  };
  componentDidMount() {
    this.fetchUsers();
    this.fetchFollowing();
  }
  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: newProps.token
      };
      axios.get("http://127.0.0.1:8000/users/").then(res => {
        this.setState({
          users: res.data
        });
      });
    } else {
      console.log("no token");
      this.setState({
        users: []
      });
    }
  }
  followOrNot(user) {
    if (this.state.following.some(e => e.id === user)) {
      console.log("Exists", user);
      return true;
    }
    return false;
  }
  handleUpdate = async (event, user) => {
    if (this.props.token !== null) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`
      };
      const follows = {
        user: { username: localStorage.getItem("user") },
        follows: [user]
      };
      await axios
        .put(
          `http://127.0.0.1:8000/api/follows/${localStorage.getItem("user")}/`,
          follows
        )
        .then(res => {
          console.log(res.data.follows);
          this.setState({ following: res.data.follows });
        });
    }
  };
  render() {
    return (
      <div>
        {this.props.token ? (
          <div>
            <List
              itemLayout="horizontal"
              dataSource={this.state.users}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta title={<p> {item.username}</p>} />
                  {this.followOrNot(item.id) ? (
                    <Button onClick={event => this.handleUpdate(event, item)}>
                      Unfollow
                    </Button>
                  ) : (
                    <Button onClick={event => this.handleUpdate(event, item)}>
                      Follow
                    </Button>
                  )}
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
export default withRouter(connect(mapStateToProps)(UserList));
