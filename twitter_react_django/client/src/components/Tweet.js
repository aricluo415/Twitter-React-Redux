import React from "react";
import { List } from "antd";

const Tweet = props => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={item => (
        <a href={`/tweets/${item.id}`}>
          <List.Item>
            <List.Item.Meta
              title={<p> {item.author.username}</p>}
              description={item.content}
            />
          </List.Item>
        </a>
      )}
    />
  );
};

export default Tweet;
