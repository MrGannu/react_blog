import React, { useState } from "react";
import "../style/pages.css";
import Blog from "./Blog";
import Filter from "./Filter";
import { blogData } from "../data";
import BlogPagination from "../component/Pagination";

const Home = () => {
  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = blogData.slice(startIndex, endIndex);
  const handleChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };
  return (
    <div className="home_div">
      <div className="container">
        <div className="home_left">
          <Blog blogData={currentPageData} />
          <BlogPagination
            totalPages={totalPages}
            currentPage={currentPage}
            handleChange={handleChange}
          />
        </div>
        <div className="home_right">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Home;
