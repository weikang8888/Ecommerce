import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../modal/LoginModal";

const HeaderNav = ({ position, downArrow }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate();

  const handleProtectedNav = (e, path) => {
    if (!localStorage.getItem("token")) {
      e.preventDefault();
      setShowLoginModal(true);
      return;
    }
    navigate(path);
  };

  return (
    <>
      <nav className="fz-header-nav">
        <ul className={`align-items-center ${position}`}>
          <Link to="/" className="fz-nav-link fz-submenu-nav-link">
            Home
          </Link>
          <Link to="/shop" className="fz-nav-link fz-submenu-nav-link">
            Shop
          </Link>
          <li className="fz-dropdown fz-nav-item">
            <a role="button" className="fz-nav-link">
              <span>pages</span>{" "}
              <i
                className={
                  downArrow ? "fa-solid fa-angle-down" : "fa-regular fa-plus"
                }
              ></i>
            </a>

            <ul className="fz-submenu">
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
                <Link
                  to="/wishlist"
                  className="fz-nav-link fz-submenu-nav-link"
                  onClick={(e) => handleProtectedNav(e, "/wishlist")}
                >
                  Wishlist
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="fz-nav-link fz-submenu-nav-link"
                  onClick={(e) => handleProtectedNav(e, "/cart")}
                >
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
      </nav>
      <LoginModal show={showLoginModal} setShow={setShowLoginModal} />
    </>
  );
};

export default HeaderNav;
