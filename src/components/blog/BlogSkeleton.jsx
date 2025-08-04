import React from "react";

const BlogSkeleton = ({ count = 3 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div className="fz-single-blog fz-inner-page-blog skeleton-blog" key={index}>
          <div className="fz-single-blog__img skeleton-blog-img">
            <div className="skeleton-image-placeholder"></div>
          </div>
          <div className="fz-single-blog__txt">
            <div className="fz-single-blog__infos skeleton-blog-infos">
              <div className="skeleton-category"></div>
              <div className="skeleton-date"></div>
            </div>
            <div className="skeleton-blog-title"></div>
            <div className="skeleton-blog-description">
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogSkeleton; 