import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteCartProduct, updateCart } from "../../api/cart/cart";
import { fetchCart } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CartItemTable = ({ cartArray, onSubtotalChange }) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.cart);

  // Calculate subtotal
  const subtotal = cartArray
    ? cartArray.reduce(
        (sum, item) => sum + Number(item.price) * (item.quantity || 1),
        0
      )
    : 0;

  // Notify parent of subtotal change
  useEffect(() => {
    if (onSubtotalChange) {
      onSubtotalChange(subtotal);
    }
  }, [subtotal, onSubtotalChange]);

  const handleRemove = async (itemId) => {
    try {
      await deleteCartProduct(itemId);
      dispatch(fetchCart());
      toast.success("Item deleted from cart!");
    } catch (error) {
      toast.error("Failed to delete item from cart!");
    }
  };

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    if (newQuantity < 0) return;

    try {
      if (newQuantity === 0) {
        // If quantity is 0, remove the item
        await handleRemove(itemId);
      } else {
        // Update the quantity
        await updateCart(itemId, { quantity: newQuantity });
        dispatch(fetchCart());
        toast.success("Cart updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to update cart!");
    }
  };

  return (
    <table className="cart-page-table">
      <tbody>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Remove</th>
        </tr>
        {status === "loading" ? (
          <>
            {[1, 2, 3].map((i) => (
              <tr key={i} className="cart-skeleton-row">
                <td>
                  <div className="cart-product">
                    <div className="cart-product__img">
                      <div
                        className="skeleton-box"
                        style={{ width: 60, height: 60 }}
                      />
                    </div>
                    <div className="cart-product__txt">
                      <div
                        className="skeleton-box mb-2"
                        style={{
                          width: 120,
                          height: 16,
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td className="text-center">
                  <div
                    className="skeleton-box d-inline-block"
                    style={{
                      width: 60,
                      height: 20,
                    }}
                  />
                </td>
                <td className="text-center">
                  <div
                    className="skeleton-box d-inline-block"
                    style={{
                      width: 100,
                      height: 35,
                    }}
                  />
                </td>
                <td className="text-center">
                  <div
                    className="skeleton-box d-inline-block"
                    style={{
                      width: 80,
                      height: 20,
                    }}
                  />
                </td>
                <td className="text-center">
                  <div
                    className="skeleton-box d-inline-block rounded-circle"
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </td>
              </tr>
            ))}
          </>
        ) : !cartArray || cartArray.length === 0 ? (
          <tr className="no-item-msg">
            <td className="no-item-msg-text">No items in the cart</td>
          </tr>
        ) : (
          cartArray.map((item) => (
            <tr key={item._id}>
              <td>
                <div className="cart-product">
                  <div className="cart-product__img">
                    <img src={item?.image} alt="Product Image" />
                  </div>
                  <div className="cart-product__txt">
                    <h6>
                      <Link to="/shopDetails">{item.name}</Link>
                    </h6>
                  </div>
                </div>
              </td>
              <td>RM{item.price}</td>
              <td>
                <div className="cart-product__quantity">
                  <div className="cart-product__quantity-btns">
                    <button
                      className="cart-product__minus"
                      onClick={() =>
                        handleUpdateQuantity(item._id, item.quantity - 1)
                      }
                    >
                      <i className="fa-light fa-minus"></i>
                    </button>
                    <button
                      className="cart-product__plus"
                      onClick={() =>
                        handleUpdateQuantity(item._id, item.quantity + 1)
                      }
                    >
                      <i className="fa-light fa-plus"></i>
                    </button>
                  </div>
                  <input
                    type="number"
                    name="product-quantity-input"
                    className="cart-product-quantity-input"
                    min="0"
                    value={item.quantity}
                    onChange={(event) => {
                      const newQuantity = parseInt(event.target.value);
                      handleUpdateQuantity(item._id, newQuantity);
                    }}
                  />
                </div>
              </td>
              <td>
                RM
                {item.total
                  ? Number(item.total).toFixed(2)
                  : (Number(item.quantity) * Number(item.price)).toFixed(2)}
              </td>
              <td>
                <button
                  className="item-remove-btn"
                  onClick={() => handleRemove(item._id)}
                >
                  <i className="fa-light fa-xmark"></i>
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default CartItemTable;
