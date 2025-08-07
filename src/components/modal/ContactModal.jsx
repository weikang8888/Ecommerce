import React from "react";

const ContactModal = ({
  show,
  setShow,
  onClose,
  type = "success",
  message,
  title,
}) => {
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
          <h3
            style={{
              marginBottom: "12px",
              color: type === "error" ? "#dc3545" : "#28a745",
            }}
          >
            {title || (type === "error" ? "Error" : "Thank You!")}
          </h3>
          <p style={{ marginBottom: "20px" }}>
            {message ||
              (type === "error"
                ? "Something went wrong. Please try again."
                : "Your email has been sent successfully.")}
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

export default ContactModal;
