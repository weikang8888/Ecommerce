import { useNavigate } from "react-router-dom";
import WishlistItemTable from "../wishlist/WishlistItemTable";
import { addCart } from "../../api/cart/cart";
import { deleteWishProduct } from "../../api/wish/wish";
import { fetchCart } from "../../store/cartSlice";
import { fetchWish } from "../../store/wishSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const WishlistModal = ({ wishlistArray, show, setShow }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to close the modal and navigate
  const closeAndNavigate = (path) => {
    setShow(false);
    navigate(path);
  };

  const handleAddAllToCart = async () => {
    if (!wishlistArray || wishlistArray.length === 0) return;
    try {
      // Add all items to cart
      await Promise.all(
        wishlistArray.map((item) =>
          addCart({ productId: item._id, quantity: 1 })
        )
      );
      
      // Remove all items from wishlist
      await Promise.all(
        wishlistArray.map((item) => deleteWishProduct(item._id))
      );
      
      // Refresh both cart and wishlist
      dispatch(fetchCart());
      dispatch(fetchWish());
      
      toast.success("All wishlist items added to cart!", {
        position: "top-right",
      });
    } catch (error) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to add wishlist items to cart!",
        { position: "top-right" }
      );
    }
  };

  return (
    <>
      <div
        className={`overlay ${show ? "open" : ""}`}
        role="button"
        onClick={() => setShow(false)}
      ></div>
      <div
        className={`cart-area cart-area-modal fz-wishlist-modal ${
          show ? "open" : ""
        }`}
        id="wishlist-modal-area"
      >
        <div className="cart__header">
          <h3 className="cart__title">Your Wishlist</h3>
          <button
            className="cart-area-modal-close-btn"
            onClick={() => setShow(false)}
          >
            <i className="fa-regular fa-xmark"></i>
          </button>
        </div>

        <div className="cart__body">
          <div className="table-container">
            <WishlistItemTable wishlistArray={wishlistArray} />
          </div>

          {!wishlistArray || wishlistArray.length === 0 ? (
            <div className="cart-left-actions d-flex justify-content-end">
              <button
                onClick={() => closeAndNavigate("/shop")}
                className="fz-1-banner-btn update-cart-btn"
              >
                Go to Shop
              </button>
            </div>
          ) : (
            <div className="cart-left-actions d-flex justify-content-between">
              <button
                onClick={() => closeAndNavigate("/wishlist")}
                className="fz-1-banner-btn update-cart-btn"
              >
                Go to Wishlist
              </button>
              <button
                className="fz-1-banner-btn update-cart-btn"
                onClick={handleAddAllToCart}
              >
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistModal;
