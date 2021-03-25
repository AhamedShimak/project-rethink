import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_DETAILS_FAIL,
} from "../constants/categoryConstants";

const categoryReducer = (state, action) => {
  switch (action.type) {
    case CATEGORY_LIST_REQUEST:
      return { ...state, loading: true };
    case CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case CATEGORY_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case CATEGORY_DETAILS_REQUEST:
      return { ...state, loading: true };

    case CATEGORY_DETAILS_SUCCESS:
      return { ...state, loading: false, currentCategory: action.payload };

    case CATEGORY_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default categoryReducer;
