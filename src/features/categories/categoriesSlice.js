import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    errors: [],
  },
  reducers: {
    getCategories: (state) => {
      state.loading = true;
    },
    getCategoriesSuccess: (state, { payload }) => {
      state.categories = payload;
      state.loading = false;
      state.errors = false;
    },
    getCategoriesFailure: (state, { payload }) => {
      state.loading = false;
      state.errors = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getCategories,
  getCategoriesSuccess,
  getCategoriesFailure,
} = categorySlice.actions;
export const categoriesSelector = (state) => state.categories;
export default categorySlice.reducer;
