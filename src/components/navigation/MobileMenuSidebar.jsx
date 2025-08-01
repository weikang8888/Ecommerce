import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenuSidebar = () => {
  const [activeNav, setActiveNav] = useState("");

  const toggleNav = (nav) => {
    setActiveNav((prevNav) => {
      if (prevNav === nav) {
        return "";
      }
      return nav;
    });
  };
  return (
    <>
      <ul className="align-items-center fz-4-menu">
        <li className="fz-nav-item">
          <Link to="/" className="fz-nav-link">
            Home
          </Link>
        </li>
        <li className="fz-nav-item">
          <Link to="/shop" className="fz-nav-link">
            Shop
          </Link>
        </li>
        <li className="fz-dropdown fz-nav-item">
          <a
            role="button"
            className="fz-nav-link"
            onClick={() => toggleNav("pages")}
          >
            <span>pages</span> <i className="fa-solid fa-angle-down"></i>
          </a>

          <ul
            className={`fz-submenu ${
              activeNav === "pages" ? "d-block" : "d-none"
            }`}
          >
            <li>
              <Link to="/about" className="fz-nav-link fz-submenu-nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/faq" className="fz-nav-link fz-submenu-nav-link">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="fz-nav-link fz-submenu-nav-link">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/cart" className="fz-nav-link fz-submenu-nav-link">
                Cart
              </Link>
            </li>
          </ul>
        </li>
        <li className="fz-nav-item">
          <Link to="/blog" className="fz-nav-link">
            Blog
          </Link>
        </li>
        <li className="fz-nav-item">
          <Link to="/contact" className="fz-nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MobileMenuSidebar;
