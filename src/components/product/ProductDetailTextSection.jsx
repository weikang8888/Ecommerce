import React from "react";
import ProductDetailAction from "./ProductDetailAction";
import CardImage from "../../assets/card.png";

const ProductDetailTextSection = ({ product }) => {
  return (
    <div className="fz-product-details__txt">
      <h2 className="fz-product-details__title">{product?.name}</h2>
      <div className="fz-product-details__price-rating">
        <span className="price">RM {product?.price}</span>
        {/* <div className="rating">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-light fa-star"></i>
        </div> */}
      </div>

      <div className="fz-product-details__infos">
        <ul>
          <li>
            <span className="info-property"> Shape </span> :{" "}
            <span className="info-value">{product?.shape}</span>
          </li>
          <li>
            <span className="info-property"> Type </span> :{" "}
            <span className="info-value">{product?.type}</span>
          </li>
          <li>
            <span className="info-property"> Availablity </span> :{" "}
            <span className="info-value">In Stock</span>
          </li>
        </ul>
      </div>

      <p className="fz-product-details__short-descr">{product?.description}</p>

      <ProductDetailAction product={product} />

      <div className="fz-product-details__payment-methods">
        <img src={CardImage} alt="Pyament Methods" />
        <span className="dialog">Guaranteed safe & secure checkout</span>
      </div>
    </div>
  );
};

export default ProductDetailTextSection;
