import React from "react";
import CustomForm from "../components/Form";
import { connect } from "react-redux";
import { Card, Button, Form } from "antd";
import { withRouter } from "react-router-dom";
import * as actions from "../actions/tweetActions";
import Hoc from "../hoc/hoc";

class TweetDetail extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.token !== this.props.token &&
      nextProps.token !== undefined &&
      nextProps.token !== null
    ) {
      console.log("componentWillRecieveProps", nextProps);
      this.props.getDetailTweet(
        this.props.match.params.tweetID,
        nextProps.token
      );
    }
  }
  componentDidMount() {
    console.log("mounted", this.props.token);
    if (this.props.token !== null && this.props.token !== undefined)
      this.props.getDetailTweet(
        this.props.match.params.tweetID,
        this.props.token
      );
  }
  handleDelete = event => {
    event.preventDefault();
    if (this.props.token !== null) {
      this.props.deleteTweet(this.props.match.params.tweetID, this.props.token);
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <Hoc>
        {this.props.loading ? (
          <h1>loading</h1>
        ) : (
          <Card>
            <h1>
              <a href={`/profile/${this.props.author.username}`}>
                {this.props.author.username}
              </a>
            </h1>
            <p>{this.props.tweet.content}</p>
          </Card>
        )}

        {localStorage.getItem("user") === this.props.author.username ? (
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
      </Hoc>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    tweet: state.tweetReducer.tweets,
    author: state.tweetReducer.author,
    loading: state.tweetReducer.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getDetailTweet: (id, token) => dispatch(actions.getDetailTweet(id, token)),
    deleteTweet: (id, token) => dispatch(actions.deleteTweet(id, token))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TweetDetail)
);
