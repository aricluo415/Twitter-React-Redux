import React from "react";
import { connect } from "react-redux";
import CustomForm from "../components/Form";
import Tweet from "../components/Tweet";
import { withRouter } from "react-router-dom";
import Pagination from "../components/Pagination";
import * as actions from "../actions/tweetActions";
import Hoc from "../hoc/hoc";

class TweetList extends React.Component {
  state = {
    page: 1
  };

  componentDidMount() {
    if (this.props.token !== undefined && this.props.token !== null) {
      const page = 1;
      this.props.getTweets(page, this.props.token);
    }
  }
  componentWillReceiveProps(nextProps) {
    if (
      nextProps.token !== this.props.token &&
      nextProps.token !== undefined &&
      nextProps.token !== null
    ) {
      this.props.getTweets(this.state.page, nextProps.token);
    }
  }

  onChange = page => {
    this.props.getTweets(page, this.props.token);
    this.setState({ page: page });
  };

  render() {
    return (
      <Hoc>
        {this.props.loading ? (
          <h2>Loading....</h2>
        ) : (
          <div>
            <h2>Tweets</h2>
            <Tweet data={this.props.tweets.results} />
            <Pagination
              data={{
                page: this.state.page,
                total: this.props.tweets.count,
                range: 10
              }}
              nextPage={this.onChange}
            />
            <h2>Create Tweet</h2>
            <CustomForm
              requestType="post"
              tweetID={null}
              btnText="create"
              passFunc={this.onChange}
            />
          </div>
        )}
      </Hoc>
    );
  }
}
const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    tweets: state.tweetReducer.tweets,
    loading: state.tweetReducer.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getTweets: (page, token) => dispatch(actions.getTweets(page, token))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TweetList)
);
