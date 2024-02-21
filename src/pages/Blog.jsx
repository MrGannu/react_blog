import React, { useEffect, useState } from "react";
import "../style/pages.css";
import { NavLink } from "react-router-dom";

const Blog = ({ blogData }) => {

  return (
    <div className="blog_container">
      {blogData.map((blog) => (
        <div className="blog_card" key={blog.id + blog.title}>
          <NavLink className="nav_link" to={`/blog/details/${blog.id}`}>
            <div className="blog_div">
              <h3>{blog?.title?.substring(0, 130)} ...</h3>
              <div className="blog_img">
                <img src={blog?.image} alt="blog-image" />
              </div>
              <p>{blog?.desc?.substring(0, 500)} ...</p>
              <p className="date">Published at : {blog?.publishedAt}</p>
            </div>
          </NavLink>
          <div className="blog_items">
            <div className="div">
              <img className="icons" src="./heart.png" alt="" />
              <span>9 likes</span>
              <img className="icons" src="./comment-alt.png" alt="" />
              <span>
                {blog.comments && blog.comments.length
                  ? blog.comments.length + " "
                  : "0 "}
                Comments
              </span>
            </div>
            <div className="div">
              <img className="icons" src="./share.png" alt="" />
              <span>2 shares</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
