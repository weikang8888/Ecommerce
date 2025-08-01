import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCart } from "../api/cart/cart";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const data = await getCart();
  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: null,
    status: "idle",
    error: null,
    addStatus: "idle",
    addError: null,
  },
  reducers: {
    clearCart: (state) => {
      state.data = null;
      state.status = "idle";
      state.error = null;
      state.addStatus = "idle";
      state.addError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Cart
      .addCase(fetchCart.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
