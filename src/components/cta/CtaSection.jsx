import React from "react";
import { Link } from "react-router-dom";
import CtaImg from "../../assets/cta-img-1.png";
const CtaSection = () => {
  return (
    <section className="fz-5-cta-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-8 col-lg-7 col-md-6">
            <div className="fz-5-cta-txt">
              <h3>Eye-Glasses</h3>
              <h2>Extra 60% off</h2>
              <Link to="/shop" className="fz-5-def-btn">
                Shop Now
              </Link>
            </div>
          </div>
          <div className="col-xxl-4 col-lg-5 col-md-6">
            <div className="fz-5-cta-img">
              <img src={CtaImg} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
