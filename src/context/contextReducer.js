import {
  AD_LIST_REQUEST,
  AD_LIST_SUCCESS,
  AD_LIST_FAIL,
  AD_DETAILS_REQUEST,
  AD_DETAILS_SUCCESS,
  AD_DETAILS_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAIL,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_DETAILS_FAIL,
  RESOURCE_LIST_REQUEST,
  RESOURCE_LIST_SUCCESS,
  RESOURCE_LIST_FAIL,
  RESOURCE_DETAILS_REQUEST,
  RESOURCE_DETAILS_SUCCESS,
  RESOURCE_DETAILS_FAIL,
  TOPIC_LIST_REQUEST,
  TOPIC_LIST_SUCCESS,
  TOPIC_LIST_FAIL,
  TOPIC_DETAILS_REQUEST,
  TOPIC_DETAILS_SUCCESS,
  TOPIC_DETAILS_FAIL,
  SUBJECT_LIST_REQUEST,
  SUBJECT_LIST_SUCCESS,
  SUBJECT_LIST_FAIL,
  SUBJECT_DETAILS_REQUEST,
  SUBJECT_DETAILS_FAIL,
} from "./constants/adConstants";

const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case AD_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state];

      localStorage.setItem("transactions", JSON.stringify(transactions));

      return transactions;
    default:
      return state;
  }
};

export default contextReducer;
