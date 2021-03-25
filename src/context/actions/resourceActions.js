import axios from "axios";

import {
  RESOURCE_LIST_REQUEST,
  RESOURCE_LIST_SUCCESS,
  RESOURCE_LIST_FAIL,
  RESOURCE_DETAILS_REQUEST,
  RESOURCE_DETAILS_SUCCESS,
  RESOURCE_DETAILS_FAIL,
} from "../constants/resourceConstants";
import { SERVER_URL } from "../constants/serverAPI";

export const listResources = async (dispatch) => {
  try {
    dispatch({ type: RESOURCE_LIST_REQUEST });

    const { data } = await axios.get(`${SERVER_URL}/api/resources`);
    dispatch({
      type: RESOURCE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESOURCE_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const resourceDetails = async (dispatch, id) => {
  try {
    dispatch({ type: RESOURCE_DETAILS_REQUEST });

    const { data } = await axios.get(`${SERVER_URL}/api/resources/${id}`);

    dispatch({
      type: RESOURCE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESOURCE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
