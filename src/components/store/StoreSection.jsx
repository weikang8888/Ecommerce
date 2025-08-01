import React from "react";
import { Link } from "react-router-dom";

import Store1 from "../../assets/about-shop-1.jpg";
import Store2 from "../../assets/about-shop-2.webp";

const StoreSection = () => {
  return (
    <div className="fz-about-store-area">
      <div className="container">
        <div className="fz-about-single-store">
          <div className="row gy-3 gy-sm-4 align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="fz-about-store-img">
                <img src={Store1} alt="House Door Image" />
              </div>
            </div>

            <div className="col-xl-6 col-lg-6">
              <div className="fz-about-store-content">
                <h4 className="fz-about-store-title">Our Store (1)</h4>
                <p>
                  We believe that vision is more than just sight — it's how you
                  experience the world. Since our founding in 2010, we’ve made
                  it our mission to offer stylish, high-quality eyewear that
                  suits every face and every lifestyle. From sleek optical
                  frames to protective sunglasses, our store combines fashion
                  and function in a welcoming, modern space.
                </p>

                <div className="fz-about-right-list">
                  <ul>
                    <li>Browse and try on the latest collections in-store</li>
                    <li>Easy order pickups and exchanges available</li>
                    <li>Get personalized frame fitting and styling advice</li>
                  </ul>
                </div>

                <Link to="/shop" className="fz-1-banner-btn fz-about-store-btn">
                  Visit Store
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="fz-about-single-store">
          <div className="row gy-3 gy-sm-4 align-items-center">
            <div className="col-xl-6 col-lg-6 order-1 order-lg-0">
              <div className="fz-about-store-content">
                <h4 className="fz-about-store-title">Our Store (2)</h4>
                <p>
                  Our eyewear boutique was created with one simple goal: to help
                  you look and see your best. Over the years, we've evolved into
                  a trusted destination for glasses, offering exceptional
                  customer service and a curated range of top-tier frames and
                  lenses. Whether you're upgrading your prescription or picking
                  out new shades, we’re here to help you find the perfect pair.
                </p>

                <div className="fz-about-right-list">
                  <ul>
                    <li>Order online and pick up in-store</li>
                    <li>Walk-ins welcome for fittings and adjustments</li>
                    <li>
                      Professional staff ready to assist with all your vision
                      needs
                    </li>
                  </ul>
                </div>

                <Link to="/shop" className="fz-1-banner-btn fz-about-store-btn">
                  Visit Store
                </Link>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 order-0 order-lg-1">
              <div className="fz-about-store-img">
                <img src={Store2} alt="House Door Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreSection;
