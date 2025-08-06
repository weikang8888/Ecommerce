import React, { useEffect } from "react";
import CartItemTable from "./CartItemTable";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCart } from "../../store/cartSlice";

const CartSection = () => {
  const dispatch = useDispatch();
  const { data: cartItems, status } = useSelector((state) => state.cart);

  useEffect(() => {
    if (!cartItems) {
      dispatch(fetchCart());
    }
  }, [dispatch, cartItems]);

  // Calculate subtotal, shipping, and total
  const subtotal = cartItems
    ? cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
    : 0;
  const shipping = cartItems && cartItems.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="container">
      <div className="cart-section">
        <div className="cart-left inner-cart">
          <div className="cart-area">
            <div className="cart__body">
              <div className="table-responsive">
                <CartItemTable cartArray={cartItems} />
              </div>

              <div className="cart-left-actions d-flex justify-content-end">
                {!cartItems || cartItems.length === 0 ? (
                  <Link className="fz-1-banner-btn update-cart-btn" to="/shop">
                    Go to Shop
                  </Link>
                ) : (
                  <form action="#" className="cart-coupon-form">
                    {/* <input
                      type="text"
                      name="cart-coupon-input"
                      id="cart-coupon-input"
                      placeholder="Enter Your Coupon Code"
                    />
                    <button
                      type="submit"
                      className="fz-1-banner-btn coupon-apply-btn"
                    >
                      Apply Coupon
                    </button> */}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="cart-checkout-area">
          <h4 className="cart-checkout-area__title">Billing Summary</h4>

          <ul className="checkout-summary">
            {status === "loading" ? (
              <>
                <li>
                  <span className="checkout-summary__key">Subtotal</span>
                                     <span className="checkout-summary__value">
                                           <div
                        className="skeleton-box d-inline-block"
                        style={{
                          width: 80,
                          height: 20,
                        }}
                      />
                   </span>
                </li>

                <li>
                  <span className="checkout-summary__key">Shipping</span>
                                     <span className="checkout-summary__value">
                                           <div
                        className="skeleton-box d-inline-block"
                        style={{
                          width: 60,
                          height: 20,
                        }}
                      />
                   </span>
                </li>

                <li className="cart-checkout-total">
                  <span className="checkout-summary__key">Total</span>
                                     <span className="checkout-summary__value">
                                           <div
                        className="skeleton-box d-inline-block"
                        style={{
                          width: 100,
                          height: 24,
                        }}
                      />
                   </span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span className="checkout-summary__key">Subtotal</span>
                  <span className="checkout-summary__value">
                    RM{subtotal.toFixed(2)}
                  </span>
                </li>

                <li>
                  <span className="checkout-summary__key">Shipping</span>
                  <span className="checkout-summary__value">
                    RM{shipping.toFixed(2)}
                  </span>
                </li>

                <li className="cart-checkout-total">
                  <span className="checkout-summary__key">Total</span>
                  <span className="checkout-summary__value">
                    RM{total.toFixed(2)}
                  </span>
                </li>
              </>
            )}
          </ul>

          {total > 0 && (
            <Link
              to="/checkout"
              className="fz-1-banner-btn cart-checkout-btn"
              state={{ subtotal }}
            >
              Proceed to checkout
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSection;
