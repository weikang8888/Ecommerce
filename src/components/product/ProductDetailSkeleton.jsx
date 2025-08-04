import React from "react";

const ProductDetailSkeleton = () => {
  return (
    <section className="fz-product-details">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Product Image Skeleton */}
          <div className="col-lg-5 col-md-6 col-12 col-xxs-12">
            <div className="product-detail-skeleton">
              <div className="skeleton-image-container">
                <div className="skeleton-main-image"></div>
                <div className="skeleton-thumbnails">
                  <div className="skeleton-thumbnail"></div>
                  <div className="skeleton-thumbnail"></div>
                  <div className="skeleton-thumbnail"></div>
                  <div className="skeleton-thumbnail"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Info Skeleton */}
          <div className="col-lg-7 col-md-6">
            <div className="product-info-skeleton">
              <div className="skeleton-title"></div>
              <div className="skeleton-price"></div>
              <div className="skeleton-description">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line" style={{ width: "70%" }}></div>
              </div>
              <div className="skeleton-quantity">
                <div className="skeleton-quantity-label"></div>
                <div className="skeleton-quantity-controls">
                  <div className="skeleton-minus-btn"></div>
                  <div className="skeleton-quantity-input"></div>
                  <div className="skeleton-plus-btn"></div>
                </div>
              </div>
              <div className="skeleton-actions">
                <div className="skeleton-add-to-cart-btn"></div>
                <div className="skeleton-wishlist-btn"></div>
              </div>
              <div className="skeleton-details">
                <div className="skeleton-detail-item">
                  <div className="skeleton-detail-label"></div>
                  <div className="skeleton-detail-value"></div>
                </div>
                <div className="skeleton-detail-item">
                  <div className="skeleton-detail-label"></div>
                  <div className="skeleton-detail-value"></div>
                </div>
                <div className="skeleton-detail-item">
                  <div className="skeleton-detail-label"></div>
                  <div className="skeleton-detail-value"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSkeleton; 