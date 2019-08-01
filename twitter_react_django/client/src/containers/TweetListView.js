import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import CustomForm from "../components/Form";
import Tweet from "../components/Tweet";
import { withRouter } from "react-router-dom";

class TweetList extends React.Component {
  state = {
    tweets: []
  };
  fetchArticles = () => {
    axios.get("http://127.0.0.1:8000/api/tweets/").then(res => {
      this.setState({
        tweets: res.data
      });
    });
  };
  componentDidMount() {
    this.fetchArticles();
  }
  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: newProps.token
      };
      axios.get("http://127.0.0.1:8000/api/tweets/").then(res => {
        this.setState({
          tweets: res.data
        });
      });
    } else {
      console.log("no token");
      this.setState({
        tweets: []
      });
    }
  }

  render() {
    return (
      <div>
        {this.props.token ? (
          <div>
            <h2>Tweets</h2>
            <Tweet data={this.state.tweets} />
            <h2>Create Tweet</h2>
            <CustomForm requestType="post" tweetID={null} btnText="create" />
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
export default withRouter(connect(mapStateToProps)(TweetList));
