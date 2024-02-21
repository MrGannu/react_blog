import React from "react";
import "../style/pages.css";
import { useNavigate } from "react-router-dom";

const Filter = () => {
  const navigate = useNavigate();
  return (
    <div className="filter_div">
      <div className="card">
        <h3>Categories</h3>
        <ul>
          <li onClick={() => navigate("/search?search=insesting")}>
            Investing
          </li>
          <li onClick={() => navigate("/search?search=leadership")}>
            Leadership
          </li>
          <li onClick={() => navigate("/search?search=technology")}>
            Technology
          </li>
          <li onClick={() => navigate("/search?search=travel")}>Travel</li>
          <li onClick={() => navigate("/search?search=animal")}>Animal</li>
        </ul>
      </div>
      <div className="card">
        <h3>About the blog</h3>
        <p>
          Mauris vitae ante ultricies pretium sed massa at, dapibus purus. Nunc
          pharetra urna vulputate elit dictum. Curabitur eu enim quis nunc
          cursus.
        </p>
      </div>
      <div className="card">
        <h3>Newsletter</h3>
        <p>Join 1M+ subscribers and receive exclusive news and resources.</p>
        <button className="submit_btn">Subscribe</button>
      </div>
      <div className="card">
        <h3>Recent posts</h3>
        <p>Five surprising ways self-driving cars will change our cities</p>
      </div>
    </div>
  );
};

export default Filter;
