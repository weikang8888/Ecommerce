import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlogs } from "../api/blog/blog";

// Async thunk for fetching products
export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const data = await getBlogs();
  return data;
});

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // Clear products state
    clearBlogs: (state) => {
      state.blogs = [];
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearBlogs } = blogSlice.actions;
export default blogSlice.reducer;
