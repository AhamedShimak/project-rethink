import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categories/categoriesSlice";
import lessonsSlice from "../features/lessons/lessonSlice";
import subjectSlice from "../features/subjects/subjectSlice";
import resultsSlice from "../features/search/searchSlice";
import labsSlice from "../features/labs/labsSlice";
export default configureStore({
  reducer: {
    subjects: subjectSlice,
    categories: categorySlice,
    lessons: lessonsSlice,
    searchResults: resultsSlice,
    labs: labsSlice,
  },
});

// export const searchKeywordSelector = (state) => state.resultsSlice.searchWord;
