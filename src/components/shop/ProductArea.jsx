import React, { useState, useEffect } from "react";
import { addCart } from "../../api/cart/cart";
import { toast } from "react-toastify";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../store/cartSlice";
import { fetchProducts } from "../../store/productSlice";
import LoginModal from "../modal/LoginModal";
import { addWish } from "../../api/wish/wish";
import { fetchWish } from "../../store/wishSlice";
import ProductSkeleton from "./ProductSkeleton";

const ProductArea = ({
  toggleFilter,
  sidebarRef,
  products: filteredProducts,
}) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { products, status } = useSelector((state) => ({
    products: state.products.products,
    status: state.products.status,
  }));

  const [listView, setListView] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [displayCount, setDisplayCount] = useState("all");

  const toggleListView = () => setListView(true);
  const toggleGridView = () => setListView(false);

  const handleAddToCart = async (productId) => {
    if (!localStorage.getItem("token")) {
      setShowLoginModal(true);
      return;
    }
    try {
      await addCart({ productId: productId, quantity: 1 });
      toast.success("Product added to cart successfully!", {
        position: "top-right",
      });
      dispatch(fetchCart());
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to add product to cart!",
        { position: "top-right" }
      );
    }
  };

  const handleAddToWish = async (productId) => {
    if (!localStorage.getItem("token")) {
      setShowLoginModal(true);
      return;
    }
    try {
      const res = await addWish({ productId });
      if (res.message && res.message.toLowerCase().includes("already in wishlist")) {
        toast.warning("Already in wishlist.", { position: "top-right" });
        return;
      }
      dispatch(fetchWish());
      toast.success("Product added to wishlist!", { position: "top-right" });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to add product to wishlist!",
        { position: "top-right" }
      );
    }
  };

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  // Use filtered products if provided, otherwise use all products
  const baseProducts = filteredProducts || products;

  // Get search term from URL parameters
  const searchTerm = searchParams.get("search") || "";

  // Sort, search and limit products
  const getProcessedProducts = () => {
    let processed = [...baseProducts];

    // Filter by search term from URL
    if (searchTerm.trim()) {
      processed = processed.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    switch (sortBy) {
      case "name-az":
        processed.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-za":
        processed.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-low-high":
        processed.sort((a, b) => (a.price || 0) - (b.price || 0));
        break;
      case "price-high-low":
        processed.sort((a, b) => (b.price || 0) - (a.price || 0));
        break;
      default:
        break;
    }

    // Limit display count
    if (displayCount !== "all") {
      const count = parseInt(displayCount);
      processed = processed.slice(0, count);
    }

    return processed;
  };

  const displayProducts = getProcessedProducts();

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleDisplayCountChange = (e) => {
    setDisplayCount(e.target.value);
  };

  // Clear search handler
  const handleClearSearch = () => {
    navigate("/shop");
  };

  return (
    <>
      <div
        className={`fz-inner-products-container ${
          listView ? "list-view-on" : ""
        }`}
      >
        <div className="row g-xl-4 g-lg-3 g-2">
          <div className="col-12">
            <div className="product-view-actions">
              <div className="row gy-3 align-items-center">
                <div className="col-xxl-6 col-xl-6 col-md-6 text-center text-md-start d-flex justify-content-md-start justify-content-center align-items-center gap-3">
                  <div className="view-type">
                    <button
                      className={`grid-view ${listView ? "" : "active"}`}
                      onClick={toggleGridView}
                    >
                      <i className="fa-solid fa-grid-2"></i>
                    </button>

                    <button
                      className={`list-view ${listView ? "active" : ""}`}
                      onClick={toggleListView}
                    >
                      <i className="fa-light fa-list"></i>
                    </button>
                  </div>
                  {status === "loading" ? (
                    <div className="skeleton-text">
                      <div
                        className="skeleton-line"
                        style={{ width: "200px", height: "16px" }}
                      ></div>
                    </div>
                  ) : searchTerm ? (
                    <div className="text-center text-sm-start mb-0 d-flex align-items-center justify-content-between w-100 flex-column flex-md-row">
                      <div>
                        Search results for "{searchTerm}": Showing 1-
                        {displayProducts.length} OF {baseProducts.length}{" "}
                        results{" "}
                      </div>
                      <button
                        className="clear-search-btn"
                        style={{
                          fontSize: "14px",
                          padding: "5px 15px",
                          fontWeight: "600",
                        }}
                        onClick={handleClearSearch}
                        type="button"
                      >
                        Clear
                      </button>
                    </div>
                  ) : (
                    `Showing 1-${displayProducts.length} OF ${baseProducts.length} results`
                  )}
                </div>

                <div className="col-xxl-6 col-xl-6 col-md-6">
                  <div className="product-view-right-actions text-center text-md-end d-flex justify-content-center justify-content-md-end">
                    <button
                      className="fz-5-def-btn fz-5-def-btn-sm rounded-1 border d-lg-none shop-filter-btn"
                      onClick={toggleFilter}
                      id="shop-filter-btn"
                      ref={sidebarRef}
                    >
                      Filter
                    </button>

                    <div className="product-sorting d-inline-block">
                      <form className="" action="#">
                        <Form.Select
                          className="nice-select"
                          value={sortBy}
                          onChange={handleSortChange}
                        >
                          <option value="">Default</option>
                          <option value="name-az">By Name (A to Z)</option>
                          <option value="name-za">By Name (Z to A)</option>
                          <option value="price-low-high">
                            By Price (Low to High)
                          </option>
                          <option value="price-high-low">
                            By Price (High to Low)
                          </option>
                        </Form.Select>
                      </form>
                    </div>
                    <div className="product-sorting d-inline-block">
                      <form className="" action="#">
                        <Form.Select
                          className="nice-select"
                          value={displayCount}
                          onChange={handleDisplayCountChange}
                        >
                          <option value="all">Show All</option>
                          <option value="15">15</option>
                          <option value="18">18</option>
                          <option value="21">21</option>
                          <option value="24">24</option>
                        </Form.Select>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {status === "loading" ? (
            <ProductSkeleton count={12} />
          ) : displayProducts.length > 0 ? (
            displayProducts.map((item) => (
              <div className="col-xl-4 col-lg-6 col-md-4 col-6" key={item._id}>
                <div className="fz-5-single-product">
                  <div className="fz-5-single-product-img">
                    <img src={item.image} alt="Image" />
                    <div className="fz-5-single-product-actions">
                      <a
                        role="button"
                        className="fz-add-to-wishlist"
                        onClick={() => handleAddToWish(item._id)}
                      >
                        <i className="fa-regular fa-heart"></i>
                      </a>
                      <a
                        role="button"
                        className="fz-quick-view"
                        onClick={() => navigate(`/shopDetails/${item._id}`)}
                      >
                        <i className="fa-regular fa-eye"></i>
                      </a>
                      {/* <a role="button" className="fz-compare">
                        <i className="fa-regular fa-repeat"></i>
                      </a> */}
                      <a
                        role="button"
                        className="fz-add-to-cart-btn"
                        onClick={() => handleAddToCart(item._id)}
                      >
                        <i className="fa-regular fa-cart-shopping"></i>
                      </a>
                    </div>
                  </div>
                  <div className="fz-5-single-product-txt">
                    <h3 className="fz-5-single-product-title">
                      <Link to="/shopDetails">{item.name}</Link>
                    </h3>
                    <p className="fz-5-single-product-dscr">
                      {item.description}
                    </p>
                    <p className="fz-5-single-product-price">RM{item.price}</p>
                    {item.offer && (
                      <div className="fz-5-discount-badge">Buy 1 Get 1</div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4>No products found</h4>
              {searchTerm && (
                <p>No products match your search for "{searchTerm}"</p>
              )}
            </div>
          )}
        </div>
      </div>
      <LoginModal show={showLoginModal} setShow={setShowLoginModal} />
    </>
  );
};

export default ProductArea;
