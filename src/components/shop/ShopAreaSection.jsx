import React, { useEffect, useRef, useState } from "react";
import ProductSidebar from "./ProductSidebar";
import ProductArea from "./ProductArea";
import { useSelector } from "react-redux";

// Sample products for testing if API doesn't return data
const sampleProducts = [
  {
    _id: "1",
    name: "Classic Round Sunglasses",
    description: "Timeless round frame sunglasses",
    price: 89,
    image: "assets/images/fz-product-29.png",
    category: "sun",
    shape: "round"
  },
  {
    _id: "2", 
    name: "Computer Blue Light Glasses",
    description: "Protect your eyes from screen glare",
    price: 45,
    image: "assets/images/fz-product-30.png",
    category: "computer",
    shape: "rectangle"
  },
  {
    _id: "3",
    name: "Reading Glasses",
    description: "Comfortable reading glasses",
    price: 25,
    image: "assets/images/fz-product-31.png",
    category: "eye",
    shape: "oval"
  },
  {
    _id: "4",
    name: "Sports Sunglasses",
    description: "Durable sports eyewear",
    price: 120,
    image: "assets/images/fz-product-29.png",
    category: "sun",
    shape: "aviator"
  },
  {
    _id: "5",
    name: "Kids Glasses",
    description: "Fun and colorful kids frames",
    price: 35,
    image: "assets/images/fz-product-30.png",
    category: "eye",
    shape: "round"
  }
];

const ShopAreaSection = () => {
  const [activeSidebar, setActiveSidebar] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedShapes, setSelectedShapes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const sidebarRef = useRef(null);
  const filterBtnRef = useRef(null);

  const { products } = useSelector((state) => ({
    products: state.products.products,
  }));

  const toggleSidebar = () => {
    setActiveSidebar(!activeSidebar);
  };

  const handleClickOutside = (event) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target) &&
      filterBtnRef.current &&
      !filterBtnRef.current.contains(event.target)
    ) {
      setActiveSidebar(false);
    }
  };

  // Filter products based on selected filters
  const getFilteredProducts = () => {
    // Use sample products if no products from API
    const allProducts = products.length > 0 ? products : sampleProducts;
    let filtered = [...allProducts];

    // Filter by category - check multiple possible field names
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(product => {
        const productCategory = product.category || product.productCategory || product.type || '';
        const matches = selectedCategories.some(cat => 
          productCategory.toLowerCase().includes(cat.toLowerCase())
        );
        return matches;
      });
    }

    // Filter by shape - check if product has shape property
    if (selectedShapes.length > 0) {
      filtered = filtered.filter(product => {
        const productShape = product.shape || product.frameShape || product.style || '';
        const matches = selectedShapes.some(shape => 
          productShape.toLowerCase().includes(shape.toLowerCase())
        );
        return matches;
      });
    }

    // Filter by price range from CustomRangeSlider
    if (selectedPrices.length > 0) {
      filtered = filtered.filter(product => {
        const productPrice = product.price || 0;
        // selectedPrices will contain a single range like "10-200" from the slider
        const priceRange = selectedPrices[0]; // Get the first (and only) price range
        const [min, max] = priceRange.split('-').map(Number);
        
        const matches = productPrice >= min && productPrice <= max;
        return matches;
      });
    }

    return filtered;
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(cat => cat !== category)
        : [...prev, category]
    );
  };

  const handleShapeChange = (shape) => {
    setSelectedShapes(prev => 
      prev.includes(shape) 
        ? prev.filter(s => s !== shape)
        : [...prev, shape]
    );
  };

  const handlePriceChange = (priceRange) => {
    // For CustomRangeSlider, we only have one price range at a time
    setSelectedPrices([priceRange]);
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedShapes([]);
    setSelectedPrices([]);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const filteredProducts = getFilteredProducts();
  
  return (
    <div className="shop-area shop-area-2 pt-120">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-3 col-lg-3">
            <ProductSidebar 
              active={activeSidebar} 
              sidebarRef={sidebarRef}
              selectedCategories={selectedCategories}
              selectedShapes={selectedShapes}
              selectedPrices={selectedPrices}
              onCategoryChange={handleCategoryChange}
              onShapeChange={handleShapeChange}
              onPriceChange={handlePriceChange}
              onResetFilters={resetFilters}
            />
          </div>
          <div className="col-xl-9 col-lg-9">
            <ProductArea
              toggleFilter={toggleSidebar}
              sidebarRef={filterBtnRef}
              products={filteredProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAreaSection;
