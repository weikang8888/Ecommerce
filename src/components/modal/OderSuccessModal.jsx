import React from "react";

const OrderSuccessModal = ({ show, setShow, onClose }) => {
  return (
    <>
      <div
        className={`overlay ${show ? "open" : ""}`}
        role="button"
        onClick={() => {
          setShow(false);
          if (onClose) onClose();
        }}
      ></div>
      <div
        className={`cart-area cart-area-modal ${show ? "open" : ""}`}
        id="order-success-modal"
        style={{
          padding: "32px",
          minWidth: "320px",
          minHeight: "180px",
          display: show ? "flex" : "none",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h3 style={{ marginBottom: "12px" }}>Thank You!</h3>
          <p style={{ marginBottom: "20px" }}>
            Your order has been placed successfully.
          </p>
        </div>
        <button
          className="fz-1-banner-btn cart-checkout-btn"
          onClick={() => {
            setShow(false);
            if (onClose) onClose();
          }}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default OrderSuccessModal;
