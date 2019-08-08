import React from "react";
import { Form, Input, Button } from "antd";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../actions/tweetActions";

const FormItem = Form.Item;

class CustomForm extends React.Component {
  handleFormSubmit = async (event, requestType, tweetID, passFunc) => {
    event.preventDefault();

    const postObj = {
      content: event.target.elements.content.value
    };

    if (requestType === "post") {
      this.props.postTweet(postObj, this.props.token);
      this.props.passFunc(1);
    } else if (requestType === "put") {
      this.props.updateTweet(tweetID, postObj, this.props.token);
    }
  };

  render() {
    return (
      <div>
        {this.props.loading ? (
          <h1>Loading</h1>
        ) : (
          <Form
            onSubmit={event =>
              this.handleFormSubmit(
                event,
                this.props.requestType,
                this.props.tweetID
              )
            }
          >
            <FormItem label="Content">
              <Input name="content" placeholder="Enter some content ..." />
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit">
                {this.props.btnText}
              </Button>
            </FormItem>
          </Form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.authReducer.token,
    loading: state.tweetReducer.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postTweet: (tweet, token) => dispatch(actions.postTweet(tweet, token)),
    updateTweet: (id, updateObj, token) =>
      dispatch(actions.updateTweet(id, updateObj, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomForm);
