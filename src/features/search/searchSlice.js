import { createSlice } from "@reduxjs/toolkit";

export const resultsSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    currentResult: "",
    searchWord: "",
    loading: false,
    errors: [],
  },
  reducers: {
    getResults: (state) => {
      state.loading = true;
    },
    getResultsSuccess: (state, { payload }) => {
      state.results = payload;
      state.loading = false;
      state.errors = false;
    },
    getResultsFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
    getCurrentResult: (state) => {
      state.loading = true;
    },
    getCurrentResultSuccess: (state, { payload }) => {
      state.currentResult = payload;
      state.loading = false;
      state.errors = false;
    },
    getCurrentResultFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
    setKeyword: (state, { payload }) => {
      state.searchWord = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getResults,
  getResultsSuccess,
  getResultsFailure,
  getCurrentResult,
  getCurrentResultSuccess,
  getCurrentResultFailure,
  setKeyword,
} = resultsSlice.actions;
// export const searchSelector = (state) => state.search;
export default resultsSlice.reducer;
