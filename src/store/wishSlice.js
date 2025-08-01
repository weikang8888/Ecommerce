import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getWish } from "../api/wish/wish";

export const fetchWish = createAsyncThunk("cart/fetchWish", async () => {
  const data = await getWish();
  return data;
});

const wishSlice = createSlice({
  name: "wish",
  initialState: {
    data: null,
    status: "idle",
    error: null,
    addStatus: "idle",
    addError: null,
  },
  reducers: {
    clearWish: (state) => {
      state.data = null;
      state.status = "idle";
      state.error = null;
      state.addStatus = "idle";
      state.addError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Wish
      .addCase(fetchWish.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchWish.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchWish.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearWish } = wishSlice.actions;
export default wishSlice.reducer;
