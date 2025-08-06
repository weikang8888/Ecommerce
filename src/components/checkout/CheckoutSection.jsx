import React, { useContext, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FarzaaContext } from "../../context/FarzaaContext";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createBilling } from "../../api/profile/profile";
import { useSelector, useDispatch } from "react-redux";
import OrderSuccessModal from "../modal/OderSuccessModal";
import { clearCartProduct } from "../../api/cart/cart";
import { fetchCart } from "../../store/cartSlice";
import ButtonSpinner from "../utils/ButtonSpinner";

const CheckoutSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { subTotal: contextSubTotal } = useContext(FarzaaContext);
  const location = useLocation();
  const { subtotal } = location.state || {};
  const { data: profile, status: statusProfile } = useSelector(
    (state) => state.profile
  );

  const displaySubtotal =
    subtotal !== undefined ? Number(subtotal) : Number(contextSubTotal);
  const displayShipping = 10.0;
  const displayTotal = displaySubtotal + displayShipping;

  // Form state for billing details, initialized from profile.billing if available
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "Malaysia",
    houseStreet: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
    additionalInfo: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (
      statusProfile === "succeeded" &&
      profile?.billing &&
      Object.values(form).every((val) => val === "" || val === "Malaysia")
    ) {
      setForm((prev) => ({
        ...prev,
        ...profile.billing,
      }));
    }
  }, [statusProfile, profile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    value = value.slice(0, 16); // Max 16 digits
    value = value.replace(/(.{4})/g, "$1 ").trim(); // Add space every 4 digits
    setCardNumber(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await createBilling({
        ...form,
        subtotal: displaySubtotal,
        shipping: displayShipping,
        total: displayTotal,
      });
      await clearCartProduct();
      dispatch(fetchCart());
      setShowThankYou(true);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to create billing.");
    } finally {
      setLoading(false);
    }
  };

  const handleOrderSuccessClose = () => {
    setShowThankYou(false);
    navigate("/shop");
  };

  return (
    <div className="container">
      <div className="fz-checkout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="fz-billing-details">
            <div className="row gy-0 gx-3 gx-md-4">
              <h3 className="fz-checkout-title">Billing Details</h3>
              {statusProfile === "loading" ? (
                <>
                  <div className="col-6 col-xxs-12">
                    <div
                      className="skeleton-box"
                      style={{ width: "100%", height: 45 }}
                    />
                  </div>
                  <div className="col-6 col-xxs-12">
                    <div
                      className="skeleton-box"
                      style={{ width: "100%", height: 45 }}
                    />
                  </div>
                  <div className="col-12">
                    <div
                      className="skeleton-box"
                      style={{ width: "100%", height: 45 }}
                    />
                  </div>
                  <div className="col-12">
                    <div
                      className="skeleton-box"
                      style={{ width: "100%", height: 45 }}
                    />
                  </div>
                  <div className="col-12">
                    <div
                      className="skeleton-box"
                      style={{ width: "100%", height: 45 }}
                    />
                  </div>
                  <div className="col-12">
                    <div
                      className="skeleton-box"
                      style={{ width: "100%", height: 45 }}
                    />
                  </div>
                  <div className="col-12">
                    <div
                      className="skeleton-box"
                      style={{ width: "100%", height: 45 }}
                    />
                  </div>
                  <div className="col-6 col-xxs-12">
                    <div
                      className="skeleton-box"
                      style={{ width: "100%", height: 45 }}
                    />
                  </div>
                  <div className="col-6 col-xxs-12">
                    <div
                      className="skeleton-box"
                      style={{ width: "100%", height: 45 }}
                    />
                  </div>
                  <div className="col-12 additional-info">
                    <div
                      className="skeleton-box mb-2"
                      style={{ width: 200, height: 20 }}
                    />
                    <div
                      className="skeleton-box"
                      style={{ width: "100%", height: 80 }}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="col-6 col-xxs-12">
                    <input
                      type="text"
                      name="firstName"
                      id="checkout-first-name"
                      placeholder="First Name"
                      value={form.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-6 col-xxs-12">
                    <input
                      type="text"
                      name="lastName"
                      id="checkout-last-name"
                      placeholder="Last Name"
                      value={form.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="companyName"
                      id="checkout-company-name"
                      placeholder="Company Name"
                      value={form.companyName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12">
                    <Form.Select
                      className="country-select"
                      name="country"
                      id="checkout-country"
                      value={form.country}
                      onChange={handleInputChange}
                    >
                      <option value="Malaysia">Malaysia</option>
                      <option value="United Kingdom">
                        United Kingdom (UK)
                      </option>
                      <option value="France">France</option>
                      <option value="Russia">Russia</option>
                      <option value="Iran">Iran</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Nepal">Nepal</option>
                    </Form.Select>
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="houseStreet"
                      id="checkout-house-street-number"
                      placeholder="House Number & Street Name"
                      value={form.houseStreet}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="apartment"
                      id="checkout-apartment-name"
                      placeholder="Apartment, Suite, Unit, etc. (optional)"
                      value={form.apartment}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="city"
                      id="checkout-city-name"
                      placeholder="Town / City"
                      value={form.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-6 col-xxs-12">
                    <input
                      type="text"
                      name="state"
                      id="checkout-state"
                      placeholder="State"
                      value={form.state}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-6 col-xxs-12">
                    <input
                      type="text"
                      name="zip"
                      id="checkout-zip-code"
                      placeholder="Zip Code"
                      value={form.zip}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12 additional-info">
                    <label
                      htmlFor="checkout-additional-info"
                      className="fz-checkout-title"
                    >
                      Additional Information
                    </label>
                    <textarea
                      name="additionalInfo"
                      id="checkout-additional-info"
                      placeholder="Notes about your order, e.g. special notes for delivery"
                      value={form.additionalInfo}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="fz-checkout-sidebar">
            <div className="billing-summery">
              <h4 className="fz-checkout-title">Billing Summary</h4>
              <div className="cart-checkout-area">
                <ul className="checkout-summary">
                  <li>
                    <span className="checkout-summary__key">Subtotal</span>
                    <span className="checkout-summary__value">
                      RM{displaySubtotal.toFixed(2)}
                    </span>
                  </li>
                  <li>
                    <span className="checkout-summary__key">Shipping</span>
                    <span className="checkout-summary__value">
                      RM{displayShipping.toFixed(2)}
                    </span>
                  </li>
                  <li className="cart-checkout-total">
                    <span className="checkout-summary__key">Total</span>
                    <span className="checkout-summary__value">
                      RM{displayTotal.toFixed(2)}
                    </span>
                  </li>
                </ul>
                <Link to="/cart" className="fz-1-banner-btn cart-checkout-btn">
                  Edit Order
                </Link>
              </div>
            </div>

            <div className="payment-info">
              <h4 className="fz-checkout-title">Payment Information</h4>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex payment-area align-items-center w-100 justify-content-between">
                  <input
                    type="text"
                    name="Pyament-option"
                    id="checkout-payment-option"
                    placeholder="xxxx xxxx xxxx xxxx"
                    maxLength={19}
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    required
                  />
                  <i className="fa-light fa-credit-card"></i>
                </div>
                <div className="d-flex align-items-center gap-2 justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <div className="payment-area">
                      <input
                        type="text"
                        name="expiry"
                        id="checkout-expiry"
                        placeholder="MM"
                        maxLength={2}
                        style={{ width: 35 }}
                        required
                      />
                    </div>
                    /
                    <div className="payment-area">
                      <input
                        type="text"
                        name="expiry"
                        id="checkout-expiry"
                        placeholder="YY"
                        maxLength={2}
                        style={{ width: 35 }}
                        required
                      />
                    </div>
                  </div>
                  <div className="payment-area">
                    <input
                      type="text"
                      name="cvv"
                      id="checkout-cvv"
                      placeholder="CVV"
                      maxLength={3}
                      style={{ width: 35 }}
                      required
                    />
                  </div>
                </div>
              </div>
              <p className="checkout-payment-descr">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our <a href="#">privacy policy</a>
              </p>
              <button
                type="submit"
                className="fz-1-banner-btn cart-checkout-btn checkout-form-btn"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <ButtonSpinner size="sm" color="black" />
                    Placing Order...
                  </>
                ) : (
                  "Place Order"
                )}
              </button>
              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </div>
          </div>
        </form>
        {/* Thank You Modal */}
        <OrderSuccessModal
          show={showThankYou}
          setShow={setShowThankYou}
          onClose={handleOrderSuccessClose}
        />
      </div>
    </div>
  );
};

export default CheckoutSection;
