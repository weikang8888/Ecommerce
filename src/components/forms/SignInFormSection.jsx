import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../api/auth/auth";
import { getProfile } from "../../api/profile/profile";

const SignInFormSection = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!userName && !password) {
      toast.error("Please fill out all fields.", { position: "top-right" });
    } else if (!password) {
      toast.warning("Please provide password.", { position: "top-right" });
    } else if (!userName) {
      toast.warning("Please provide user name.", { position: "top-right" });
    } else {
      try {
        const response = await login({ userName, password });
        if (response?.token && response?._id) {
          localStorage.setItem("token", response.token);
          localStorage.setItem("id", response._id);
        }
        toast.success("Logged in successfully!", { position: "top-right" });
        setUserName("");
        setPassword("");
        navigate("/");
      } catch (error) {
        toast.error(error?.response?.data?.message || "Login failed.", {
          position: "top-right",
        });
      }
    }
  };

  return (
    <form action="#" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="login-username"
        id="login-username"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        name="login-password"
        id="login-password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="sign-in-checkbox-container d-flex justify-content-between">
        <div className="stay-sign-in">
          <input
            type="checkbox"
            name="sign-in-checkbox"
            id="sign-in-checkbox"
          />
          <label htmlFor="sign-in-checkbox">Stay Logged in</label>
        </div>
        <Link to="#" className="password-recovery-btn">
          Forgot Your Password?
        </Link>
      </div>

      <button type="submit" className="fz-1-banner-btn single-form-btn">
        Log in
      </button>
    </form>
  );
};

export default SignInFormSection;
