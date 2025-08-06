import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../store/blogSlice";
import BlogSkeleton from "./BlogSkeleton";

const BlogSection = () => {
  const dispatch = useDispatch();
  const { blogs, status } = useSelector((state) => ({
    blogs: state.blogs.blogs,
    status: state.blogs.status,
  }));

  useEffect(() => {
    if (blogs.length === 0) {
      dispatch(fetchBlogs());
    }
  }, [dispatch, blogs.length]);

  return (
    <section className="fz-5-blog-section pt-120">
      <div className="container">
        <div className="fz-5-section-heading fz-5-section-heading-2">
          <div className="row justify-content-center">
            <div className="col-sm-6">
              <div className="section-heading__txt text-center">
                <h2 className="fz-section-title">Our style blog</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {status === "loading" ? (
            <BlogSkeleton count={3} displayMode="flex" />
          ) : blogs && blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-10"
                key={blog._id || index}
              >
                <div className="fz-5-blog-card">
                  <div className="fz-5-blog-card-img">
                    <img src={blog.image} alt={blog.title || "Blog image"} />
                  </div>
                  <div className="fz-5-blog-card-txt">
                    <h3 className="fz-5-blog-card-title">
                      <Link to={`/blog`}>{blog.title}</Link>
                    </h3>
                    <p>
                      {blog.description ||
                        "Choose a Frame. Select a glasses frame, and add it to your shopping we will answer the phone cart..."}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4>No blogs found</h4>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
