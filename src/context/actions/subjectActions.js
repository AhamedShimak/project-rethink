import axios from "axios";
import {
  SUBJECT_LIST_REQUEST,
  SUBJECT_LIST_SUCCESS,
  SUBJECT_LIST_FAIL,
  SUBJECT_DETAILS_REQUEST,
  SUBJECT_DETAILS_SUCCESS,
  SUBJECT_DETAILS_FAIL,
} from "../constants/subjectConstants";
import { SERVER_URL } from "../constants/serverAPI";

export const listSubjects = async (dispatch) => {
  try {
    dispatch({ type: SUBJECT_LIST_REQUEST });

    const { data } = await axios.get(`${SERVER_URL}/api/variations`);
    dispatch({
      type: SUBJECT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUBJECT_LIST_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const subjectDetails = async (dispatch, id) => {
  try {
    dispatch({ type: SUBJECT_DETAILS_REQUEST });

    const { data } = await axios.get(`${SERVER_URL}/api/variations/${id}`);

    dispatch({
      type: SUBJECT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SUBJECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};
