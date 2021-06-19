import axios from "axios";
import { laptonApi } from "../api/api";
import {
  getResults,
  getResultsSuccess,
  getResultsFailure,
  // getCurrentResult,
  // getCurrentResultSuccess,
  // getCurrentResultFailure,
  setKeyword,
} from "../features/search/searchSlice";
export async function listResults(dispatch, keyword) {
  dispatch(getResults());
  try {
    const { data } = await axios.get(
      `${laptonApi}/api/resources/search?keyword=${keyword}`
    );

    dispatch(getResultsSuccess(data));
  } catch (error) {
    // console.log(error);
    dispatch(getResultsFailure(error));
  }
}
export async function setSearch(dispatch, keyword) {
  dispatch(setKeyword(keyword));
}

// export const subjectDetails = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: AD_DETAILS_REQUEST });

//     const { data } = await axios.get(`${SERVER_URL}/api/advertisements/${id}`);

//     dispatch({
//       type: AD_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: AD_DETAILS_FAIL,
//       payload:
//         error.response && error.response.data.detail
//           ? error.response.data.detail
//           : error.message,
//     });
//   }
// };
