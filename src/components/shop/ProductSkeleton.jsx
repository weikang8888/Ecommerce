import React from "react";

const ProductSkeleton = ({
  count = 6,
  gridClass = "col-xl-4 col-lg-6 col-md-4 col-6",
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div className={gridClass} key={index}>
          <div className="fz-5-single-product skeleton-product">
            <div className="fz-5-single-product-img skeleton-img">
              <div className="skeleton-image-placeholder"></div>
              <div className="fz-5-single-product-actions skeleton-actions">
                <div className="skeleton-action-btn"></div>
                <div className="skeleton-action-btn"></div>
                <div className="skeleton-action-btn"></div>
              </div>
            </div>
            <div className="fz-5-single-product-txt">
              <div className="skeleton-title"></div>
              <div className="skeleton-description">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
              </div>
              <div className="skeleton-price"></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductSkeleton;
