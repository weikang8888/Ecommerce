import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchWish } from "../../store/wishSlice";
import { toast } from "react-toastify";
import { deleteWishProduct } from "../../api/wish/wish";
import { addCart } from "../../api/cart/cart";
import { fetchCart } from "../../store/cartSlice";
import ButtonSpinner from "../utils/ButtonSpinner";

const WishlistItemTable = ({ wishlistArray }) => {
  const dispatch = useDispatch();
  const [loadingItems, setLoadingItems] = useState({});

  const handleAddWishToCart = async (id) => {
    setLoadingItems(prev => ({ ...prev, [id]: true }));
    try {
      await addCart({ productId: id, quantity: 1 });
      toast.success("Wishlist item added to cart!", { position: "top-right" });
      await deleteWishProduct(id);
      dispatch(fetchWish());
      dispatch(fetchCart());
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to add wishlist item to cart!",
        { position: "top-right" }
      );
    } finally {
      setLoadingItems(prev => ({ ...prev, [id]: false }));
    }
  };

  const handleRemoveWish = async (id) => {
    try {
      await deleteWishProduct(id);
      dispatch(fetchWish());
      toast.success("Item removed from wishlist!", { position: "top-right" });
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to remove item from wishlist!",
        { position: "top-right" }
      );
    }
  };

  return (
    <div className="wishlist-table">
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>price</th>
            <th>action</th>
            <th>remove</th>
          </tr>
          {!wishlistArray || wishlistArray.length === 0 ? (
            <tr className="no-item-msg">
              <td className="no-item-msg-text">No items in the wishlist.</td>
            </tr>
          ) : (
            wishlistArray.map((item) => (
              <tr key={item._id}>
                <td>
                  <div className="cart-product">
                    <div className="cart-product__img">
                      <img src={item.image} alt="Product Image" />
                    </div>
                    <div className="cart-product__txt">
                      <h6>
                        <Link to="/shopDetails">{item.name}</Link>
                      </h6>
                    </div>
                  </div>
                </td>
                <td>${item.price}</td>
                <td>
                  <div className="fz-wishlist-action">
                    <button
                      className="fz-add-to-cart-btn fz-1-banner-btn fz-wishlist-action-btn"
                      onClick={() => handleAddWishToCart(item._id)}
                      disabled={loadingItems[item._id]}
                    >
                      {loadingItems[item._id] ? (
                        <>
                          <ButtonSpinner size="sm" color="black" />
                          Adding...
                        </>
                      ) : (
                        "Add to cart"
                      )}
                    </button>
                  </div>
                </td>
                <td>
                  <button
                    className="item-remove-btn"
                    onClick={() => handleRemoveWish(item._id)}
                  >
                    <i className="fa-light fa-xmark"></i>
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WishlistItemTable;
