import React, { useState } from "react";

const ProductCategoryList2 = ({ selectedCategories, onCategoryChange }) => {
  const categories = [
    { id: "sun", name: "Sun Glasses" },
    { id: "eye", name: "Eye Glasses" },
    { id: "computer", name: "Computer Glasses" },
  ];

  const handleCategoryChange = (categoryId) => {
    onCategoryChange(categoryId);
  };

  return (
    <div className="sidebar-single-area">
      <h3 className="sidebar-single-area__title">Category</h3>
      <ul className="product-categories">
        {categories.map((category, index) => (
          <li className="cat-item" key={category.id}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={category.id}
                id={`category_${index}`}
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
              />
              <label className="form-check-label" htmlFor={`category_${index}`}>
                {category.name}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductCategoryList2;
