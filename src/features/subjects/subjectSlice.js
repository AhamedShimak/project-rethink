import { createSlice } from "@reduxjs/toolkit";

export const subjectSlice = createSlice({
  name: "subjects",
  initialState: {
    subjects: [],
    loading: false,
    errors: [],
  },
  reducers: {
    getSubjects: (state) => {
      state.loading = true;
    },
    getSubjectsSuccess: (state, { payload }) => {
      state.subjects = payload;
      state.loading = false;
      state.errors = false;
    },
    getSubjectsFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getSubjects,
  getSubjectsSuccess,
  getSubjectsFailure,
} = subjectSlice.actions;
export const subjectsSelector = (state) => state.subjects;
export default subjectSlice.reducer;
