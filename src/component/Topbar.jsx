import React, { useState } from "react";
import "../style/component.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Topbar = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search?search=${input}`);
  };
  const { pathname } = useLocation();
  return (
    <div className="topbar_div">
      <div className="topbarcontainer">
        <div className="logo">
          <NavLink to="/" className="nav_link">
            <h3>Thapa</h3>
          </NavLink>
        </div>
        <div className="nav_items">
          <>
            <NavLink
              exact
              className={pathname === "/" ? "li active" : "li"}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              exact
              className={pathname === "/about" ? "li active" : "li"}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              exact
              className={pathname === "/contact" ? "li active" : "li"}
              to="/contact"
            >
              Contact
            </NavLink>
            <div className="search">
              <input
                type="search"
                placeholder="Search by category..."
                onChange={(e) => setInput(e.target.value)}
              />
              <img
                src={`/search.png`}
                alt="search-icon"
                onClick={handleSearch}
              />
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
