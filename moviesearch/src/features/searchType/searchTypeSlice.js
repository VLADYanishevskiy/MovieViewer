import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "name",
};

const searchTypeSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setNameSearch(state) {
      state.type = "name";
    },
    setFilterSearch(state) {
      state.type = "filter";
    },
  },
});

export const { setNameSearch, setFilterSearch } = searchTypeSlice.actions;
export default searchTypeSlice.reducer;
