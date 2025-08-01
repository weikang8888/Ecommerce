import React, { useEffect, useState } from "react";
import BlogContainerSidebar from "./BlogContainerSidebar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../store/blogSlice";

const BlogContainer = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="container">
      <main className="blog-page-content">
        <div className="blogs-container">
          <div className="blogs">
            {!blogs || blogs.length === 0 ? (
              <div className="no-blog-post-area">
                <h3 className="no-blog-post-text">No Blog Post Available</h3>
                <p className="no-blog-post-desc">
                  There are no blog post according to your search tags
                </p>
              </div>
            ) : (
              blogs.map((item) => (
                <div
                  className="fz-single-blog fz-inner-page-blog"
                  key={item._id}
                >
                  <div className="fz-single-blog__img">
                    <img src={item.image} alt={item.category} />
                  </div>
                  <div className="fz-single-blog__txt">
                    <div className="fz-single-blog__infos">
                      <span className="fz-single-blog__category">
                        <Link to="#">{item.category}</Link>
                      </span>
                      <span className="fz-single-blog__date">
                        {item.created}
                      </span>
                    </div>

                    <h3 className="fz-single-blog__title">
                      <Link to="/blogDetails">{item.title}</Link>
                    </h3>
                    <p className="fz-single-blog__desc">{item.description}</p>

                    {/* <Link
                      to="/blogDetails"
                      className="fz-1-banner-btn fz-single-blog__btn"
                    >
                      Read More
                    </Link> */}
                  </div>
                </div>
              ))
            )}
          </div>
          {/* Pagination nav enabled */}
          {/* <nav className="fz-shop-pagination">
            <ul className="page-numbers">
              <li>
                <button
                  disabled={currentBlogPage === 1}
                  onClick={() => handleBlogPageChange(currentBlogPage - 1)}
                  className="page-number-btn"
                >
                  <span aria-current="page" className="last-page">
                    <i className="fa-light fa-angle-double-left"> </i>
                  </span>
                </button>
              </li>
              {Array.from({ length: totalBlogPage }).map((_, index) => (
                <li key={index}>
                  <button
                    className={`page-number-btn ${
                      currentBlogPage === index + 1 ? "current" : ""
                    }`}
                    onClick={() => handleBlogPageChange(index + 1)}
                  >
                    <span aria-current="page" className="page-number">
                      {index + 1}
                    </span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  disabled={currentBlogPage === totalBlogPage}
                  className="page-number-btn"
                  onClick={() => handleBlogPageChange(currentBlogPage + 1)}
                >
                  <span aria-current="page" className="last-page">
                    <i className="fa-light fa-angle-double-right"> </i>
                  </span>
                </button>
              </li>
            </ul>
          </nav> */}
        </div>

        <BlogContainerSidebar />
      </main>
    </div>
  );
};

export default BlogContainer;
