import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../api/api";
import { filterData } from "../../services/filterService";

export const fetchResults = createAsyncThunk(
  "results/fetchResults",
  async ({ query, filters, page }, { dispatch, getState }) => {
    const response = await dispatch(
      api.endpoints.searchByName.initiate({ query, filters, page })
    );
    if (response.error) {
      throw new Error(response.error);
    }

    return response.data;

    return {
      data: response.data,
      filters: filters,
    };
  }
);

const initialState = {
  isLoading: true,
  error: null,
  data: {},
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchResults.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.data = null;
      })
      .addCase(fetchResults.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload; //filterData(action.payload);
      })
      .addCase(fetchResults.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
        state.data = null;
      });
  },
});

export default resultsSlice.reducer;
