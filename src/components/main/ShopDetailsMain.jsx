import React from "react";
import BreadcrumbSection from "../breadcrumb/BreadcrumbSection";
import ProductDetailSection from "../product/ProductDetailSection";
import RelatedProductSection from "../product/RelatedProductSection";

const ShopDetailsMain = () => {
  return (
    <>
      <BreadcrumbSection title={"Shop Details"} currentPage={"Shop Details"} />
      <ProductDetailSection />
      {/* <RelatedProductSection /> */}
    </>
  );
};

export default ShopDetailsMain;
