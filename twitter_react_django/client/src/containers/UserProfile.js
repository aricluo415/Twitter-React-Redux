import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Tweet from "../components/Tweet";
import Follows from "../components/Follows";
import "../css/userprofile.css";
class UserProfile extends React.Component {
  state = {
    user: "",
    follows: [],
    tweets: []
  };

  fetchProfile = () => {
    const username = this.props.match.params.username;
    axios
      .get(`http://127.0.0.1:8000/api/profile/${username}`)
      .then(res => {
        this.setState({
          user: res.data.user.username,
          follows: res.data.follows.follows,
          tweets: res.data.tweets
        });
      })
      .catch(console.log(""));
  };
  componentDidMount() {
    this.fetchProfile();
  }
  /*componentWillReceiveProps(newProps) {
    if (newProps.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: newProps.token
      };
      const username = this.props.match.params.username;
      axios.get(`http://127.0.0.1:8000/api/profile/${username}`).then(res => {
        this.setState({
          user: res.data.user.username,
          follows: res.data.follows.follows,
          tweets: res.data.tweets
        });
        console.log(res.data);
      });
    } else {
      console.log("no token");
      this.setState({
        profiles: []
      });
    }
  }*/

  render() {
    return (
      <div>
        <h2>{this.state.user}</h2>

        <div className="left">
          <h1>Tweets</h1>
          <Tweet data={this.state.tweets} />
        </div>
        <div className="right">
          <h1>Follows</h1>
          <Follows data={this.state.follows} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.authReducer.token
  };
};
export default withRouter(connect(mapStateToProps)(UserProfile));
