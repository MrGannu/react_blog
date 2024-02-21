import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "../style/component.css";

const BlogPagination = ({ totalPages, currentPage, handleChange }) => {
  return (
    <div className="pagination">
      <div className="pagination_container">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChange}
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
};

export default BlogPagination;
