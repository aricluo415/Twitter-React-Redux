import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/authActions";
import TweetList from "./TweetListView";

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  render() {
    console.log(this.props.match);
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            {this.props.isAuthenticated ? (
              <Menu.Item key="2" onClick={this.props.logout}>
                <Link to="/">Logout </Link>
              </Menu.Item>
            ) : (
              <Menu.Item key="2">
                <Link to="/login">Login</Link>
              </Menu.Item>
            )}
            {this.props.isAuthenticated ? null : (
              <Menu.Item key="3">
                <Link to="/register">Register</Link>
              </Menu.Item>
            )}
            {this.props.isAuthenticated ? (
              <Menu.Item key="4">
                <Link to={`/follows/${localStorage.getItem("user")}`}>
                  Following
                </Link>
              </Menu.Item>
            ) : null}
            {this.props.isAuthenticated ? (
              <Menu.Item key="5">
                <Link to="/users">Users</Link>
              </Menu.Item>
            ) : null}
            {this.props.isAuthenticated ? (
              <Menu.Item key="6">
                <Link to={`/profile/${localStorage.getItem("user")}`}>
                  Profile
                </Link>
              </Menu.Item>
            ) : null}

            <Menu.Item key="1">
              <Link to="/">Posts</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2016 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    loading: state.authReducer.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(actions.logout())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CustomLayout)
);
