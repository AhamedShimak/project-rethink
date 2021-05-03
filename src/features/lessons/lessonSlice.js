import { createSlice } from "@reduxjs/toolkit";

export const lessonsSlice = createSlice({
  name: "lessons",
  initialState: {
    lessons: [],
    currentLesson: "",
    loading: false,
    errors: [],
  },
  reducers: {
    getLessons: (state) => {
      state.loading = true;
    },
    getLessonsSuccess: (state, { payload }) => {
      state.lessons = payload;
      state.loading = false;
      state.errors = false;
    },
    getLessonsFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
    getCurrentLesson: (state) => {
      state.loading = true;
    },
    getCurrentLessonSuccess: (state, { payload }) => {
      state.currentLesson = payload;
      state.loading = false;
      state.errors = false;
    },
    getCurrentLessonFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getLessons,
  getLessonsSuccess,
  getLessonsFailure,
  getCurrentLesson,
  getCurrentLessonSuccess,
  getCurrentLessonFailure,
} = lessonsSlice.actions;
export const lessonsSelector = (state) => state.lessons;
export const currentLessonSelector = (state) => state.currentLesson;
export default lessonsSlice.reducer;
