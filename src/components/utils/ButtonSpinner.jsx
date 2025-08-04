import React from "react";

const ButtonSpinner = ({ size = "sm", color = "black" }) => {
  const spinnerSize = size === "sm" ? "12px" : size === "md" ? "16px" : "20px";

  return (
    <div
      className="button-spinner"
      style={{
        width: spinnerSize,
        height: spinnerSize,
        border: `2px solid ${
          color === "white" ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.1)"
        }`,
        borderTop: `2px solid ${color === "white" ? "#ffffff" : "#000000"}`,
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        display: "inline-block",
        marginRight: "8px",
      }}
    />
  );
};

export default ButtonSpinner;
