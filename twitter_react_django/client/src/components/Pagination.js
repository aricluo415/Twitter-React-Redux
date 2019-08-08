import React from "react";
import { Pagination as Paginate } from "antd";

const Pagination = props => {
  return (
    <div>
      <Paginate
        total={props.data.total}
        showTotal={(total, range) =>
          `${range[0]}-${range[1]} of ${total} items`
        }
        pageSize={props.data.range}
        defaultCurrent={props.data.page}
        onChange={props.nextPage}
      />
    </div>
  );
};

export default Pagination;
