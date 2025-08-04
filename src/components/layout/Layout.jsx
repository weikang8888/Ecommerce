import React, { useEffect } from "react";
import HeaderSection from "../header/HeaderSection";
import FooterSection from "../footer/FooterSection";
import BottomMobileMenu from "../navigation/BottomMobileMenu";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../store/profileSlice";
import { fetchCart } from "../../store/cartSlice";
import { fetchWish } from "../../store/wishSlice";
import Logo from "../../assets/logo-5.png";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.profile);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (status === "idle" && token) {
      dispatch(fetchProfile());
    }
  }, [dispatch, status]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (status === "idle" && token) {
      dispatch(fetchCart());
    }
  }, [dispatch, status]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (status === "idle" && token) {
      dispatch(fetchWish());
    }
  }, [dispatch, status]);
  return (
    <main className="fz-5-body">
      <HeaderSection />
      {children}
      <FooterSection />
      <BottomMobileMenu style="fz-5-mobile-menu" logo={Logo} />
    </main>
  );
};

export default Layout;
