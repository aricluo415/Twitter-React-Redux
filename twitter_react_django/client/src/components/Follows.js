import React from "react";
import { List } from "antd";

const Follows = props => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={item => (
        <a href={`/tweets/${item.id}`}>
          <List.Item>
            <List.Item.Meta title={<p> {item.username}</p>} description="ok" />
          </List.Item>
        </a>
      )}
    />
  );
};

export default Follows;
