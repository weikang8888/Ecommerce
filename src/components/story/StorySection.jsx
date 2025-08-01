import React from "react";

import Customer1 from "../../assets/customr-1.png";
import Customer2 from "../../assets/customr-2.png";
import Customer3 from "../../assets/customr-3.png";
import Customer4 from "../../assets/customr-4.png";
import Customer5 from "../../assets/customr-5.png";

import About1 from "../../assets/about-1.jpg";
import About2 from "../../assets/about-2.jpeg";

import WeikangProfile from "../../assets/weikang.jpg";
import Signature from "../../assets/sign.png";

const StorySection = () => {
  return (
    <div className="fz-about-area">
      <div className="container">
        <div className="row gy-5">
          <div className="col-xl-6">
            <div className="fz-about-images">
              <div className="row g-0">
                <div className="col-sm-8 col-6">
                  <div className="fz-about-images-left">
                    <div className="fz-about-images-left-img">
                      <img src={About1} alt="about1-1.png" />
                    </div>

                    <div className="fz-about__infos mt-30">
                      <div className="fz-about__members">
                        <span className="fz-about__members-amount">30K+</span>
                        <span className="fz-about__members-label">
                          Active Customer
                        </span>
                      </div>

                      <ul className="fz-about__members-img">
                        <li>
                          <img src={Customer1} alt="Person picture" />
                        </li>
                        <li>
                          <img src={Customer2} alt="Person picture" />
                        </li>
                        <li>
                          <img src={Customer3} alt="Person picture" />
                        </li>
                        <li>
                          <img src={Customer4} alt="Person picture" />
                        </li>
                        <li>
                          <img src={Customer5} alt="Person picture" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 col-6 align-self-end align-self-xxs-start">
                  <div className="fz-about-images-right">
                    <div className="fz-about-images-right-img">
                      <img src={About2} alt={About2} />
                    </div>

                    <div className="fz-about-images-right__card">
                      <div className="fz-about-images-right__card-wrapp">
                        <div className="fz-about-images-right__card-inner">
                          <span className="fz-about-images-right__card-text">
                            Since From
                          </span>
                          <span className="fz-about-images-right__card-year">
                            2025
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="fz-about-right-content">
              <h4 className="fz-about-right-title">About Our Story</h4>
              <p className="fz-about-right-descr">
                It’s a well-known fact that the right pair of glasses can do
                more than improve vision — they can define personality and
                style. Since our founding in the mid-2010s, we’ve been
                passionate about helping people see the world more clearly and
                confidently. From timeless classics to modern frames, we blend
                comfort, quality, and aesthetics in every design. Whether you're
                looking for prescription eyewear, stylish sunglasses, or
                blue-light blockers, our goal is to help you find the perfect
                fit for your face and lifestyle.
              </p>
              <div className="row">
                <div className="col-xl-5 col-md-4 col-sm-5 col-7 col-xxs-12">
                  <div className="fz-about-right-img">
                    <img src={About1} alt="Person" />
                  </div>
                </div>
                <div className="col-sm-7 col-md-8 col-xl-7">
                  <div className="fz-about-right-list">
                    <ul>
                      <li>Easy online ordering & home delivery</li>
                      <li>In-store try-on & pickup options</li>
                      <li>Expert style consultation</li>
                      <li>Wide range of brands & frame styles</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="fz-about-author">
                <span className="fz-about-author-sign-img">
                  <img src={Signature} alt="Signature" />
                </span>

                <div className="fz-about-author-intro">
                  <span className="fz-about-author-img">
                    <img
                      src={WeikangProfile}
                      alt="Person"
                      style={{
                        width: "61px",
                        height: "61px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </span>
                  <div className="fz-about-author-intro__txt">
                    <h5 className="fz-about-author-name">Ng Wei Kang</h5>
                    <span className="fz-about-author-label">Author</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StorySection;
