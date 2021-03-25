import {
  SUBJECT_LIST_REQUEST,
  SUBJECT_LIST_SUCCESS,
  SUBJECT_LIST_FAIL,
  SUBJECT_DETAILS_REQUEST,
  SUBJECT_DETAILS_SUCCESS,
  SUBJECT_DETAILS_FAIL,
} from "../constants/subjectConstants";

const subjectReducer = (state, action) => {
  switch (action.type) {
    case SUBJECT_LIST_REQUEST:
      return { ...state, loading: true };
    case SUBJECT_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        subjects: action.payload,
      };
    case SUBJECT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case SUBJECT_DETAILS_REQUEST:
      return { ...state, loading: true };

    case SUBJECT_DETAILS_SUCCESS:
      return { ...state, loading: false, currentSubject: action.payload };

    case SUBJECT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default subjectReducer;
