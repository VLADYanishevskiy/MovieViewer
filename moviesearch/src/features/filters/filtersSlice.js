import { createSlice } from "@reduxjs/toolkit";
import { watchedStatus } from "../../configs/WatchedStatus";

const initialState = {
  category: null,
  minYear: null,
  maxYear: null,
  watchedStatus: watchedStatus.ALL,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action) {
      if (Number.isInteger(action.payload)) {
        state.category = action.payload;
      } else if (typeof action.payload === "string") {
        var parsed = Number.parseInt(action.payload);

        if (!Number.isNaN(parsed)) {
          state.category = parsed;
        }
      }
    },
    setMinYear(state, action) {
      if (Number.isInteger(action.payload)) {
        state.minYear = action.payload;
      } else if (typeof action.payload === "string") {
        var parsed = Number.parseInt(action.payload);

        if (!Number.isNaN(parsed)) {
          state.minYear = parsed;
        }
      }
    },
    setMaxYear(state, action) {
      if (Number.isInteger(action.payload)) {
        state.maxYear = action.payload;
      } else if (typeof action.payload === "string") {
        var parsed = Number.parseInt(action.payload);

        if (!Number.isNaN(parsed)) {
          state.maxYear = parsed;
        }
      }
    },
    setWatchedStatus(state, action) {
      if (
        action &&
        action.payload &&
        (action.payload === watchedStatus.ALL ||
          action.payload === watchedStatus.UNWATCHED ||
          action.payload === watchedStatus.WATCHED)
      ) {
        state.watchedStatus = action.payload;
      }
    },
  },
});

export const { setCategory, setMinYear, setMaxYear, setWatchedStatus } =
  filtersSlice.actions;
export default filtersSlice.reducer;
