import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addCart } from "../../api/cart/cart";
import { toast } from "react-toastify";
import LoginModal from "../modal/LoginModal";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../store/cartSlice";
import { addWish } from "../../api/wish/wish";
import { fetchWish } from "../../store/wishSlice";

const GlassSection2 = ({ products }) => {
  const dispatch = useDispatch();

  const [showLoginModal, setShowLoginModal] = useState(false);
  // Filter products by type
  const eyeGlasses = products.filter((product) => product.type === "eye");
  const computerGlasses = products.filter(
    (product) => product.type === "computer"
  );

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
      await addWish({ productId });
      dispatch(fetchWish());
      toast.success("Product added to wishlist!", { position: "top-right" });
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to add product to wishlist!",
        { position: "top-right" }
      );
    }
  };

  return (
    <>
      <section className="fz-5-product pt-120 pb-120">
        <div className="container">
          <div className="row g-xl-4 g-lg-3 g-4">
            <div className="col-12">
              <div className="row g-xl-4 g-lg-3 g-2">
                {eyeGlasses.slice(0, 3).map((item, index) => (
                  <div
                    className={`col-lg-3 col-md-4 col-6 order-lg-${
                      index + 1
                    } order-${index + 2}`}
                    key={item._id}
                  >
                    <div className="fz-5-single-product">
                      <div className="fz-5-single-product-img">
                        <img src={item.image} alt={item.name} />
                        <div className="fz-5-single-product-actions">
                          <a
                            role="button"
                            className="fz-add-to-wishlist"
                            onClick={() => handleAddToWish(item._id)}
                          >
                            <i className="fa-regular fa-heart"></i>
                          </a>
                          <a role="button" className="fz-quick-view">
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
                        <p className="fz-5-single-product-price">
                          ${item.price}
                        </p>
                        {item.offer && (
                          <div className="fz-5-discount-badge">Buy 1 Get 1</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-lg-3 col-md-4 col-6 order-lg-4 order-1">
                  <div className="fz-5-product-title-box">
                    <h3>Eye-Glasses</h3>
                    <p>
                      Choose a Frame. Select a glasses frame, and add it to your
                      shopping we will answer the phone cart.
                    </p>
                    <Link to="/shop" className="fz-5-def-btn-2">
                      View Range
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row g-xl-4 g-lg-3 g-2">
                {computerGlasses.slice(0, 3).map((item, index) => (
                  <div
                    className={`col-lg-3 col-md-4 col-6 order-lg-${
                      index + 1
                    } order-${index + 2}`}
                    key={item._id}
                  >
                    <div className="fz-5-single-product">
                      <div className="fz-5-single-product-img">
                        <img src={item.image} alt={item.name} />
                        <div className="fz-5-single-product-actions">
                          <a
                            role="button"
                            className="fz-add-to-wishlist"
                            onClick={() => handleAddToWish(item._id)}
                          >
                            <i className="fa-regular fa-heart"></i>
                          </a>
                          <a role="button" className="fz-quick-view">
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
                        <p className="fz-5-single-product-price">
                          ${item.price}
                        </p>
                        {item.offer && (
                          <div className="fz-5-discount-badge">Buy 1 Get 1</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="col-lg-3 col-md-4 col-6 order-lg-4 order-1">
                  <div className="fz-5-product-title-box">
                    <h3>Computer Glasses</h3>
                    <p>
                      Choose a Frame. Select a glasses frame, and add it to your
                      shopping we will answer the phone cart.
                    </p>
                    <Link to="/shop" className="fz-5-def-btn-2">
                      View Range
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <LoginModal show={showLoginModal} setShow={setShowLoginModal} />
    </>
  );
};

export default GlassSection2;
