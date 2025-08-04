import React, { useContext, useEffect, useRef, useState } from "react";
import HeaderNav from "../navigation/HeaderNav";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "../modal/CartModal";
import WishlistModal from "../modal/WishlistModal";
import CustomFlagDropdown from "../utils/CustomFlagDropdown";
import { useDispatch, useSelector } from "react-redux";
import { clearProfile } from "../../store/profileSlice";
import LoginModal from "../modal/LoginModal";
import { FarzaaContext } from "../../context/FarzaaContext";
import Logo from '../../assets/logo-5.png'

const HeaderSection = () => {
  const {
    isHeaderFixed,
    handleQuantityChange,
  } = useContext(FarzaaContext);
  const [activeActions, setActiveActions] = useState(false);
  const [activeSearchbar, setActiveSearchbar] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { data: profile } = useSelector((state) => state.profile);
  const { data: cartItems } = useSelector((state) => state.cart);
  const { data: wishItems } = useSelector((state) => state.wish);

  // Calculate total quantity directly from Redux cart
  const totalCartQuantity =
    cartItems?.reduce((sum, item) => sum + (item.quantity || 0), 0) || 0;
  const userName = profile?.userName || profile?.name || "";

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleActions = () => {
    setActiveActions(!activeActions);
    if (activeSearchbar) {
      setActiveSearchbar(false);
    } else {
      return;
    }
  };
  const toggleSearchbar = () => {
    setActiveSearchbar(!activeSearchbar);
    if (activeActions) {
      setActiveActions(false);
    } else {
      return;
    }
  };

  const handleUserDropdown = () => {
    setShowUserDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    dispatch(clearProfile());
    setShowUserDropdown(false);
    navigate("/account");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Navigate to shop page with search parameter
      navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setActiveSearchbar(false);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  const actionsRef = useRef(null);

  const handleClickOutside = (event) => {
    if (actionsRef.current && !actionsRef.current.contains(event.target)) {
      setActiveActions(false);
    }
    if (actionsRef.current && !actionsRef.current.contains(event.target)) {
      setActiveSearchbar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleWishlistShow = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      setShowLoginModal(true);
      return;
    }
    setShowWishlist(true);
  };

  const handleCartShow = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("token")) {
      setShowLoginModal(true);
      return;
    }
    setShowCart(true);
  };

  return (
    <header className="fz-header-section fz-5-header-section">
      <div className="top-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <p>SALE: 400+ products up to 70% off. Shop Now</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`to-be-fixed ${isHeaderFixed ? "fixed" : ""}`}
        ref={actionsRef}
      >
        <div className="middle-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-4">
                <div className="row align-items-center">
                  <div className="col-xl-3 col-6">
                    <div className="logo">
                      <Link to="/">
                        <img src={Logo} alt="" />
                      </Link>
                    </div>
                  </div>
                  <div className="col-xl-9 d-xl-block d-none">
                    <div className="fz-5-header-txt">
                      <ul className="d-flex">
                        <li>
                          Call us{" "}
                          <a href="callto:(60)11-1081-0323">(60)11-1081-0323</a>
                        </li>
                        <li>Mon-Fri 9AM - 9PM</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-6 d-lg-none">
                    <div className="d-flex gap-4 justify-content-end">
                      <button id="openSearch" onClick={toggleSearchbar}>
                        <i className="fa-regular fa-magnifying-glass"></i>
                      </button>
                      <button id="openInfo" onClick={toggleActions}>
                        <i className="fa-regular fa-grid-2"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-lg-4">
                <div className="header-search">
                  <form 
                    className={activeSearchbar ? "active" : ""} 
                    onSubmit={handleSearch}
                  >
                    <input 
                      type="search" 
                      name="keyword" 
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={handleSearchInputChange}
                      onKeyPress={handleSearchKeyPress}
                    />
                    <button type="submit">
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4">
                <ul
                  className={`header-action ${activeActions ? "active" : ""}`}
                >
                  <li>
                    {userName ? (
                      <div
                        style={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={handleUserDropdown}
                        >
                          <i className="fa-regular fa-user-vneck me-2"></i>{" "}
                          {userName}
                        </span>
                        {showUserDropdown && (
                          <div
                            style={{
                              position: "absolute",
                              top: "100%",
                              left: 0,
                              background: "#fff",
                              border: "1px solid #ccc",
                              zIndex: 1000,
                              minWidth: "120px",
                              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            }}
                          >
                            <button
                              style={{
                                width: "100%",
                                padding: "8px 16px",
                                background: "none",
                                border: "none",
                                textAlign: "left",
                                cursor: "pointer",
                              }}
                              onClick={handleLogout}
                            >
                              Logout
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link to="/account">
                        <i className="fa-regular fa-user-vneck me-2"></i> Sign
                        In & Sign Up
                      </Link>
                    )}
                  </li>
                  <li>
                    <a
                      role="button"
                      className="fz-header-wishlist-btn"
                      onClick={handleWishlistShow}
                    >
                      <i className="fa-regular fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      role="button"
                      className="fz-header-cart-btn"
                      onClick={handleCartShow}
                    >
                      <span className="badge">{totalCartQuantity}</span>
                      <i className="fa-regular fa-cart-shopping"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header d-lg-block d-none">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-9 col-xl-8 col-lg-7 header-nav-container">
                <HeaderNav position="fz-4-menu" downArrow />
              </div>
              <div className="col-xxl-3 col-xl-4 col-lg-5">
                {/* <div className="select-lang d-flex gap-5 justify-content-end align-items-center">
                  <a href="#" className="order-track">
                    Track Order
                  </a>
                  <CustomFlagDropdown />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <WishlistModal
        wishlistArray={wishItems}
        show={showWishlist}
        setShow={setShowWishlist}
      />
      <CartModal
        cartArray={cartItems}
        quantity={handleQuantityChange}
        show={showCart}
        setShow={setShowCart}
      />

      <LoginModal show={showLoginModal} setShow={setShowLoginModal} />
    </header>
  );
};

export default HeaderSection;
