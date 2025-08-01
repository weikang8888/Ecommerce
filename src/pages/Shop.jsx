import React from "react";
import BreadcrumbSection from "../components/breadcrumb/BreadcrumbSection";
import FeatureSection from "../components/feature/FeatureSection";
import ShopAreaSection from "../components/shop/ShopAreaSection";

const Shop2 = () => {
  return (
    <>
      <BreadcrumbSection title="Shop Page" currentPage="Products" />
      <ShopAreaSection />
      <FeatureSection />
    </>
  );
};

export default Shop2;
