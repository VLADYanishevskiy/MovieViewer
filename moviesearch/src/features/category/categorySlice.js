import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/api";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (_, { dispatch, getState }) => {
    const response = await dispatch(api.endpoints.fetchCategories.initiate());
    if (response.error) {
      throw new Error(response.error);
    }
    return response.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categories = action.payload.genres;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
