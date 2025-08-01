import React, { useEffect } from "react";
import WishlistItemTable from "./WishlistItemTable";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchWish } from "../../store/wishSlice";

const WishlistSection = () => {
  const dispatch = useDispatch();
  const { data: wishItems } = useSelector((state) => state.wish);

  useEffect(() => {
    if (!wishItems) {
      dispatch(fetchWish());
    }
  }, [dispatch, wishItems]);

  return (
    <div className="container">
      <div className="cart-section wishlist-section">
        <div className="cart-left wishlist-inner-section">
          <div className="cart-area">
            <div className="cart__body">
              <div className="table-responsive">
                <WishlistItemTable wishlistArray={wishItems} />
              </div>
              <div className="cart-left-actions d-flex justify-content-end">
                {!wishItems || wishItems.length === 0 ? (
                  <Link className="fz-1-banner-btn update-cart-btn" to="/shop">
                    Go to Shop
                  </Link>
                ) : (
                  <button
                    type="submit"
                    className="fz-1-banner-btn update-cart-btn"
                  >
                    Add all product to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistSection;
