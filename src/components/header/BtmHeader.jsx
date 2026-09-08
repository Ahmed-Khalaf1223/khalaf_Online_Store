import React from "react";
import { IoIosMenu } from "react-icons/io";
import { TiArrowSortedDown } from "react-icons/ti";
import { PiSignInFill } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";

import { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "about", link: "/about" },
  { title: "accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "contact", link: "/contact" },
];

function BtmHeader() {
  const location = useLocation();
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsCategoryOpen(false);
  }, [location]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);
  return (
    <div className="btn_header">
      <div className="container">
        <div className="nav">
          <div
            className="mobile_menu_btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <IoIosMenu />
          </div>
          <div className="category_nav">
            <div
              className="category_btn"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <p>Browse Category</p>
              <TiArrowSortedDown />
            </div>
            <div
              className={`category_nav_list ${isCategoryOpen ? "active" : ""}`}
            >
              {categories.map((category) => (
                <Link
                  to={`category/${category.slug}`}
                  key={category.slug}
                  className="category_item"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <div className={`nav_links ${isMenuOpen ? "open" : ""}`}>
            {navLinks.map((item) => (
              <li
                key={item.link}
                className={location.pathname === item.link ? "active" : ""}
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to={item.link} className="nav_item">
                  {item.title}
                </Link>
              </li>
            ))}
          </div>
        </div>
        <div className="sign_regs_icon">
          <Link to="/">
            <PiSignInFill />
          </Link>
          <Link to="/">
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BtmHeader;
