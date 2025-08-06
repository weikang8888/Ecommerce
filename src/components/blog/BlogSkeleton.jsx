import React from "react";

const BlogSkeleton = ({ count = 3, displayMode = "normal" }) => {
  const skeletonItems = Array.from({ length: count }).map((_, index) => {
    if (displayMode === "flex") {
      // For BlogSection - display as flex items in a grid
      return (
        <div className="col-lg-4 col-md-6 col-sm-10" key={index}>
          <div className="fz-5-blog-card skeleton-blog">
            <div className="fz-5-blog-card-img skeleton-blog-img">
              <div className="skeleton-image-placeholder"></div>
            </div>
            <div className="fz-5-blog-card-txt">
              <div className="skeleton-blog-title"></div>
              <div className="skeleton-blog-description">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line" style={{ width: "70%" }}></div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      // For BlogContainer - display as normal block elements
      return (
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
      );
    }
  });

  return <>{skeletonItems}</>;
};

export default BlogSkeleton; 