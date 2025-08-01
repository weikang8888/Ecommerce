import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import LoginModal from "../modal/LoginModal";

const ProtectedRoute = ({ children }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setShowLoginModal(true);
      const timer = setTimeout(() => {
        setShouldRedirect(true);
      }, 1000); // 2 seconds delay

      return () => clearTimeout(timer);
    }
  }, [token]);

  if (!token) {
    return (
      <>
        {shouldRedirect && <Navigate to="/" replace />}
        <LoginModal show={showLoginModal} setShow={setShowLoginModal} />
      </>
    );
  }

  return children;
};

export default ProtectedRoute; 