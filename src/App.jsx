import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SunglassShop from "./pages/SunglassShop";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Shop from "./pages/Shop";
import ShopDetails from "./pages/ShopDetails";
import TermConditionMain from "./components/main/TermConditionMain";
import Privacy from "./pages/Privacy";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ScrollToTop from "./components/utils/ScrollToTop";
import "./assets/css/index.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<SunglassShop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopDetails/:id" element={<ShopDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route
            path="/wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/account" element={<Account />} />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/blogDetails" element={<BlogDetails />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/term-conditions" element={<TermConditionMain />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
