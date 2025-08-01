import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import wishReducer from "./wishSlice";
import blogReducer from "./blogSlice";

const store = configureStore({
  reducer: {
    profile: profileReducer,
    cart: cartReducer,
    products: productReducer,
    wish: wishReducer,
    blogs: blogReducer,
  },
});

export default store;
