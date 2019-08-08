import React from "react";
import { List } from "antd";

const Follows = props => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href={`/profile/${item.username}`}>{item.username}</a>}
          />
        </List.Item>
      )}
    />
  );
};

export default Follows;
