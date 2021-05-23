import { createSlice } from "@reduxjs/toolkit";

export const labsSlice = createSlice({
  name: "labs",
  initialState: {
    labs: [],
    currentLesson: "",
    loading: false,
    errors: [],
  },
  reducers: {
    getLabs: (state) => {
      state.loading = true;
    },
    getLabsSuccess: (state, { payload }) => {
      state.labs = payload;
      state.loading = false;
      state.errors = false;
    },
    getLabsFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
    getCurrentLab: (state) => {
      state.loading = true;
    },
    getCurrentLabSuccess: (state, { payload }) => {
      state.currentLab = payload;
      state.loading = false;
      state.errors = false;
    },
    getCurrentLabFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getLabs,
  getLabsSuccess,
  getLabsFailure,
  getCurrentLab,
  getCurrentLabSuccess,
  getCurrentLabFailure,
} = labsSlice.actions;
export const labsSelector = (state) => state.labs;
export const currentLabSelector = (state) => state.currentLab;
export default labsSlice.reducer;
