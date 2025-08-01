import { useNavigate } from "react-router-dom";
import CartItemTable from "../cart/CartItemTable";
import { useState } from "react";

const CartModal = ({ cartArray, remove, quantity, show, setShow }) => {
  const navigate = useNavigate();
  const [subtotal, setSubtotal] = useState(0);

  // Function to close the modal and navigate
  const closeAndNavigate = (path, state = {}) => {
    setShow(false);
    navigate(path, { state });
  };

  return (
    <>
      <div
        className={`overlay ${show ? "open" : ""}`}
        role="button"
        onClick={() => setShow(false)}
      ></div>
      <div
        className={`cart-area cart-area-modal ${show ? "open" : ""}`}
        id="cart-area-modal"
      >
        <div className="cart__header">
          <h3 className="cart__title">Shopping cart</h3>
          <button
            className="cart-area-modal-close-btn"
            onClick={() => setShow(false)}
          >
            <i className="fa-regular fa-xmark"></i>
          </button>
        </div>
        <div className="cart__body">
          <div className="table-container">
            <CartItemTable
              cartArray={cartArray}
              onSubtotalChange={setSubtotal}
            />
          </div>

          {!cartArray || cartArray.length === 0 ? (
            <div className="cart-left-actions d-flex justify-content-end">
              <button
                onClick={() => closeAndNavigate("/shop")}
                className="fz-1-banner-btn update-cart-btn"
              >
                Go to Shop
              </button>
            </div>
          ) : (
            <div className="cart-left-actions d-flex justify-content-between">
              <button
                onClick={() => closeAndNavigate("/cart")}
                className="fz-1-banner-btn update-cart-btn"
              >
                View Full cart
              </button>
              <button
                className="fz-1-banner-btn update-cart-btn"
                onClick={() => closeAndNavigate("/checkout", { subtotal })}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartModal;
