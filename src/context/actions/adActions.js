import axios from "axios";

import {
  AD_LIST_REQUEST,
  AD_LIST_SUCCESS,
  AD_LIST_FAIL,
  AD_DETAILS_REQUEST,
  AD_DETAILS_SUCCESS,
  AD_DETAILS_FAIL,
} from "../constants/adConstants";
import { SERVER_URL } from "../constants/serverAPI";

export const listAds = async (dispatch) => {
  try {
    dispatch({ type: AD_LIST_REQUEST });

    const { data } = await axios.get(`${SERVER_URL}/api/promotions`);
    dispatch({
      type: AD_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AD_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const adDetails = async (dispatch, id) => {
  try {
    dispatch({ type: AD_DETAILS_REQUEST });

    const { data } = await axios.get(`${SERVER_URL}/api/promotions/${id}`);

    dispatch({
      type: AD_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: AD_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
