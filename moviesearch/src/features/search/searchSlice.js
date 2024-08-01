import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  page: 1,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    goToNextPage(state) {
      state.page = state.page + 1;
    },
    goToPreviousPage(state) {
      if (state.page > 1) {
        state.page = state.page - 1;
      }
    },
    goToPage(state, action) {
      var pageNumber = parseInt(action.payload);

      if (!isNaN(pageNumber) && pageNumber > 0) {
        state.page = pageNumber;
      }
    },
  },
});

export const { setQuery, goToPage, goToNextPage, goToPreviousPage } =
  searchSlice.actions;
export default searchSlice.reducer;
