import React, { useState, useEffect } from "react";
import CustomRangeSlider from "../utils/CustomRangeSlider";

const FramePriceFilter = ({ selectedPrices, onPriceChange }) => {
  const initialMinValue = 10;
  const initialMaxValue = 200;
  const [sliderValues, setSliderValues] = useState({
    sliderOne: initialMinValue,
    sliderTwo: initialMaxValue,
  });

  const handleSliderChange = (values) => {
    setSliderValues(values);
    // Create a price range string for filtering
    const priceRange = `${values.sliderOne}-${values.sliderTwo}`;
    onPriceChange(priceRange);
  };

  // Update slider when selectedPrices change (for reset functionality)
  useEffect(() => {
    if (selectedPrices.length === 0) {
      setSliderValues({
        sliderOne: initialMinValue,
        sliderTwo: initialMaxValue,
      });
    }
  }, [selectedPrices]);

  return (
    <div className="sidebar-single-area price-filter-area">
      <h3 className="sidebar-single-area__title">Price</h3>
      
      <div className="slider-keypress">
        <CustomRangeSlider
          minValue={10}
          maxValue={200}
          initialMinValue={initialMinValue}
          initialMaxValue={initialMaxValue}
          onSliderChange={handleSliderChange}
        />
      </div>
      <div className="price-filter">
        <div className="filtered-price">
          <div className="filtered-price__number d-flex align-items-center justify-content-between">
            <div className="range-start d-flex align-items-center">
              <span className="currency-sign">RM</span>
              <span className="input-with-keypress-0">
                {sliderValues.sliderOne}.00
              </span>
            </div>
            <div className="range-end d-flex align-items-center">
              <span className="currency-sign">RM</span>
              <span className="input-with-keypress-1">
                {sliderValues.sliderTwo}.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramePriceFilter;
