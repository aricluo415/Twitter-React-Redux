import React from "react";
import { List } from "antd";

const Tweet = props => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={
              <a href={`/profile/${item.username}`}>{item.author.username}</a>
            }
            description={<a href={`/tweets/${item.id}`}>{item.content}</a>}
          />
        </List.Item>
      )}
    />
  );
};

export default Tweet;
