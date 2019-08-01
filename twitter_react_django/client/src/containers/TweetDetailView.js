import React from "react";
import axios from "axios";
import CustomForm from "../components/Form";
import { connect } from "react-redux";
import { Card, Button, Form } from "antd";
import { withRouter } from "react-router-dom";

class TweetDetail extends React.Component {
  state = {
    tweet: {}
  };
  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: newProps.token
      };
      const tweetID = this.props.match.params.tweetID;
      axios.get(`http://127.0.0.1:8000/api/tweets/${tweetID}`).then(res => {
        this.setState({
          tweet: res.data
        });
        console.log(this.state.tweet);
      });
    }
  }
  handleDelete = async event => {
    event.preventDefault();
    if (this.props.token !== null) {
      console.log(this.props.match.params);
      const tweetID = this.props.match.params.tweetID;
      axios.defaults.headers = {
        "Content-Type": "application/json",
        Authorization: `Token ${this.props.token}`
      };
      await axios
        .delete(`http://127.0.0.1:8000/api/tweets/${tweetID}/`)
        .then(res => {
          console.log(res);
          this.props.history.push("/");
        });
    }
  };

  render() {
    console.log(this.props);
    console.log(localStorage.getItem("user"));
    let currUser = "";
    if (this.state.tweet.author) {
      console.log(this.state.tweet.author);
      currUser = this.state.tweet.author.username;
    }

    return (
      <div>
        {this.state.tweet.content ? (
          <Card>
            <h1>{this.state.tweet.author.username}</h1>
            <p>{this.state.tweet.content}</p>
          </Card>
        ) : (
          <div />
        )}

        {localStorage.getItem("user") === currUser ? (
          <div>
            <CustomForm
              {...this.props}
              requestType="put"
              tweetID={this.props.match.params.tweetID}
              btnText="Update"
            />
            <Form onSubmit={this.handleDelete} className="float-right">
              <Button type="danger" htmlType="submit">
                Delete
              </Button>
            </Form>
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
export default withRouter(connect(mapStateToProps)(TweetDetail));
