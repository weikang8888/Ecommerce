import React, { useEffect } from "react";
import BannerSection5 from "../components/banner/BannerSection5";
import PopularShades from "../components/product/PopularShades";
import CtaSection from "../components/cta/CtaSection";
import GlassSection from "../components/product/GlassSection";
import CtaSection2 from "../components/cta/CtaSection2";
import GlassSection2 from "../components/product/GlassSection-2";
import CtaSection3 from "../components/cta/CtaSection3";
import SunGlassSection from "../components/product/SunglassSection";
import OfferSection4 from "../components/offer/OfferSection4";
import BrandSection2 from "../components/brands/BrandSection2";
import BlogSection from "../components/blog/BlogSection";
import FeatureSection from "../components/feature/FeatureSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";

const SunglassShop = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => ({
    products: state.products.products,
  }));

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  return (
    <>
      <BannerSection5 />
      <PopularShades />
      <CtaSection />
      <GlassSection products={products} />
      <CtaSection2 />
      <GlassSection2 products={products} />
      <OfferSection4 />
      <SunGlassSection products={products} />
      <CtaSection3 />
      <SunGlassSection products={products} />
      <BrandSection2 />
      <BlogSection />
      <FeatureSection />
    </>
  );
};

export default SunglassShop;
