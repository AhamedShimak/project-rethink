import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categories/categoriesSlice";
import lessonsSlice from "../features/lessons/lessonSlice";
import subjectSlice from "../features/subjects/subjectSlice";
import resultsSlice from "../features/search/searchSlice";
export default configureStore({
  reducer: {
    subjects: subjectSlice,
    categories: categorySlice,
    lessons: lessonsSlice,
    searchResults: resultsSlice,
  },
});

// export const searchKeywordSelector = (state) => state.resultsSlice.searchWord;
