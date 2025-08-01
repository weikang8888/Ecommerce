import React from "react";
import ProductCategoryList2 from "./ProductCategoryList2";
import FrameShapeFilter from "./FrameShapeFilter";
import FrameColorFilter from "./FrameColorFilter";
import FrameBrandFilter from "./FrameBrandFilter";
import FramePriceFilter from "./FramePriceFilter";
import FrameWidthFilter from "./FrameWidthFilter";
import GenderSelectFilter from "./GenderSelectFilter";
import SalesFilter from "./SalesFilter";
import MaterialFilter from "./MaterialFilter";
import GlassColorFilter from "./GlassColorFilter";

const ProductSidebar = ({ 
  sidebarRef, 
  active, 
  selectedCategories,
  selectedShapes,
  selectedPrices,
  onCategoryChange,
  onShapeChange,
  onPriceChange,
  onResetFilters
}) => {
  return (
    <div
      className={`fz-sidebar fz-sidebar-2 ${active ? "active" : ""}`}
      ref={sidebarRef}
    >
      {/* <GenderSelectFilter /> */}
      <ProductCategoryList2 
        selectedCategories={selectedCategories}
        onCategoryChange={onCategoryChange}
      />
      <FrameShapeFilter 
        selectedShapes={selectedShapes}
        onShapeChange={onShapeChange}
      />
      <FramePriceFilter 
        selectedPrices={selectedPrices}
        onPriceChange={onPriceChange}
      />
      <div className="sidebar-single-area">
        <button 
          className="fz-5-def-btn-2 w-100"
          onClick={onResetFilters}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductSidebar;
