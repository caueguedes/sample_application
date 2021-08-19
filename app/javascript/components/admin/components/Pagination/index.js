import React from "react";

import MUIPagination from "@material-ui/lab/Pagination";

const Pagination = ({page, total_pages}) => {
  const handleChange = (event, value) => {
    window.location.assign(`?page=${value}`);
  };
  return (
    <MUIPagination
      page={Number(page)}
      count={total_pages}
      onChange={handleChange}
    />
  );
};

export default Pagination;