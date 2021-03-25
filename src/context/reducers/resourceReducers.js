import {
  RESOURCE_LIST_REQUEST,
  RESOURCE_LIST_SUCCESS,
  RESOURCE_LIST_FAIL,
  RESOURCE_DETAILS_REQUEST,
  RESOURCE_DETAILS_SUCCESS,
  RESOURCE_DETAILS_FAIL,
} from "../constants/resourceConstants";

const resourceReducer = (state, action) => {
  switch (action.type) {
    case RESOURCE_LIST_REQUEST:
      return { ...state, loading: true };
    case RESOURCE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        resources: action.payload,
      };
    case RESOURCE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case RESOURCE_DETAILS_REQUEST:
      return { ...state, loading: true };

    case RESOURCE_DETAILS_SUCCESS:
      return { ...state, loading: false, currentResource: action.payload };

    case RESOURCE_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default resourceReducer;
