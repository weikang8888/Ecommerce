import { useNavigate } from "react-router-dom";

const LoginModal = ({ show, setShow }) => {
  const navigate = useNavigate();

  // Function to close the modal and navigate
  const closeAndNavigate = (path) => {
    setShow(false);
    navigate(path);
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
        <div style={{ marginBottom: "24px", textAlign: "center" }}>
          <h3 style={{ marginBottom: "12px" }}>Login Required</h3>
          <p style={{ marginBottom: "20px" }}>
            You need to log in to access your wishlist or cart.
          </p>
        </div>
        <button
          style={{
            padding: "10px 24px",
            background: "#222",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={() => closeAndNavigate("/account")}
        >
          Go to Login / Register
        </button>
      </div>
    </>
  );
};

export default LoginModal;
