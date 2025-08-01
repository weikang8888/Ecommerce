import React, { useState } from "react";
import { addCart } from "../../api/cart/cart";
import { addWish } from "../../api/wish/wish";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchCart } from "../../store/cartSlice";
import { fetchWish } from "../../store/wishSlice";
import LoginModal from "../modal/LoginModal";

const ProductDetailAction = ({ product }) => {
  const dispatch = useDispatch();
  const defaultQuantity = 1;
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = async () => {
    if (!localStorage.getItem("token")) {
      setShowLoginModal(true);
      return;
    }
    try {
      await addCart({ productId: product._id, quantity: quantity });
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

  const handleAddToWish = async () => {
    if (!localStorage.getItem("token")) {
      setShowLoginModal(true);
      return;
    }
    try {
      await addWish({ productId: product._id });
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
      <div className="fz-product-details__actions">
        <div className="fz-product-details__quantity cart-product__quantity">
          <button
            className="minus-btn cart-product__minus"
            onClick={() => handleQuantityChange(quantity - 1)}
          >
            <i className="fa-light fa-minus"></i>
          </button>
          <input
            type="number"
            name="product-quantity"
            className="cart-product-quantity-input"
            value={quantity}
            onChange={(e) =>
              handleQuantityChange(Math.max(1, parseInt(e.target.value)))
            }
            min="1"
          />
          <button
            className="plus-btn cart-product__plus"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            <i className="fa-light fa-plus"></i>
          </button>
        </div>
        <button 
          className="fz-product-details__add-to-cart"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
        <button 
          className="fz-product-details__add-to-wishlist"
          onClick={handleAddToWish}
        >
          <i className="fa-light fa-heart"></i>
        </button>
      </div>
      <LoginModal show={showLoginModal} setShow={setShowLoginModal} />
    </>
  );
};

export default ProductDetailAction;
