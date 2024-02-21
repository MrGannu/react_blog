import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { blogData } from "../data";
import "../style/pages.css";
import Filter from "./Filter";
import Blog from "./Blog";
import empty from "../../public/no-results.png";
import BlogPagination from "../component/Pagination";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search");

  const ITEMS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = searchResults.slice(startIndex, endIndex);
  const handleChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (searchQuery) {
      const filteredResults = blogData.filter((blog) =>
        blog.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  return (
    <div className="home_div">
      <div className="container">
        <div className="home_left">
          <h2>Search Results : {searchResults.length}</h2>

          {currentPageData.length > 0 ? (
            <Blog blogData={currentPageData} />
          ) : (
            <div className="empty">
              <img src={empty} alt="empty-logo" />
              <p>No data found ...</p>
            </div>
          )}
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

export default Search;
