import {
  AD_LIST_REQUEST,
  AD_LIST_SUCCESS,
  AD_LIST_FAIL,
  AD_DETAILS_REQUEST,
  AD_DETAILS_SUCCESS,
  AD_DETAILS_FAIL,
} from "../constants/adConstants";

const adReducer = (state, action) => {
  switch (action.type) {
    case AD_LIST_REQUEST:
      return { ...state, loading: true };
    case AD_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        advertisements: action.payload,
      };
    case AD_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case AD_DETAILS_REQUEST:
      return { ...state, loading: true };

    case AD_DETAILS_SUCCESS:
      return { ...state, loading: false, currentAdvertisement: action.payload };

    case AD_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export default adReducer;
